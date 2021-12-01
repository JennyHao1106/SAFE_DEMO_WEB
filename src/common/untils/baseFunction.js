function changePlaceName(placeCode) {
  if (placeCode == 1) {
    return "一站位东向";
  }
  return placeCode;
}

function changeAlarmState(alarmState) {
  if (alarmState == 2) {
    return "异常告警";
  }
  return alarmState;
}

function changeCamName(camCode) {
  if (camCode == 3) {
    return "二层西北向相机";
  } else if (camCode == 1) {
    return "一层登机东向相机";
  }
  return camCode;
}
function changeCheckState(checkState) {
  if (checkState == 2) {
    return "正常";
  }
  return checkState;
}

function changeTimeToDate(timestap) {
  let time = new Date(parseInt(timestap));
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let second = time.getSeconds();
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;
}

export default {
  changePlaceName,
  changeAlarmState,
  changeCamName,
  changeCheckState,
  changeTimeToDate
};
