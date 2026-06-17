# 구글 앱스 스크립트(GAS) 백엔드 코드 업데이트

`사번성명_RAWDATA` 시트에서 사번과 이름을 대조하여 일치하지 않을 경우 설문을 진행할 수 없도록 차단하는 로직이 추가된 새로운 GAS 코드입니다.
기존 Apps Script 편집기에 아래 코드를 **모두 덮어쓰기** 하신 후, 반드시 **[새 배포]**(New Deployment)를 진행해주세요!

```javascript
function doGet(e) {
  var action = e.parameter.action;
  
  if (action === "check") {
    var empId = String(e.parameter.empId).trim();
    var empName = String(e.parameter.empName).trim();
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // ============================================
    // 1. 사번 및 성명 일치 여부 검증 (사번성명_RAWDATA 시트)
    // ============================================
    var rawSheet = ss.getSheetByName("사번성명_RAWDATA");
    var isValid = false;
    var foundId = false;
    
    if (rawSheet) {
      var rawData = rawSheet.getDataRange().getValues();
      
      // i=1 (2행)부터 반복하여 확인
      for (var i = 1; i < rawData.length; i++) {
        var rowId = String(rawData[i][0]).trim();
        var rowName = String(rawData[i][1]).trim();
        
        if (rowId === empId) {
          foundId = true;
          if (rowName === empName) {
            isValid = true;
          }
          break; // 사번을 찾았으므로 루프 종료
        }
      }
      
      // 사번이 존재하지 않는 경우
      if (!foundId) {
        return ContentService.createTextOutput(JSON.stringify({ 
          valid: false, 
          error: "등록되지 않은 사번입니다." 
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
      // 사번은 존재하나 성명이 틀린 경우
      if (!isValid) {
        return ContentService.createTextOutput(JSON.stringify({ 
          valid: false, 
          error: "사번과 성명이 일치하지 않습니다." 
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
    } else {
      return ContentService.createTextOutput(JSON.stringify({ 
        valid: false, 
        error: "'사번성명_RAWDATA' 시트를 찾을 수 없습니다." 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // ============================================
    // 2. 중복 참여 여부 확인 (첫 번째 설문응답 시트)
    // ============================================
    var responseSheet = ss.getSheets()[0]; 
    var data = responseSheet.getDataRange().getValues();
    var exists = false;
    
    for (var j = 1; j < data.length; j++) {
      // 설문응답 시트의 B열(인덱스 1)이 사번이라고 가정
      if (String(data[j][1]).trim() === empId) {
        exists = true;
        break;
      }
    }
    
    // 모든 검증 통과 (valid: true) 및 중복 여부 반환
    return ContentService.createTextOutput(JSON.stringify({ 
      valid: true, 
      exists: exists 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  // CORS 처리 설정
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.TEXT);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow(data);
    
    output.setContent("Success");
  } catch(error) {
    output.setContent("Error: " + error.toString());
  }
  
  return output;
}
```
