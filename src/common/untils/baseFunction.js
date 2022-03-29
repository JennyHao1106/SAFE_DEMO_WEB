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
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let second = time.getSeconds();
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;
}

/**
 * @description 用于处理hk传入的日期数据的处理之后再写入json文件
 * @param {*} fmt 转换后的日期格式
 * @param {*} date  传入的日期 格式为：2022-03-26T16:36:23+08:00
 * @returns 
 */
function dateFormat(fmt, date) {
  let ret = "";
  date = new Date(date);
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      )
    }
  }
  return fmt
}
export default {
  changePlaceName,
  changeAlarmState,
  changeCamName,
  changeCheckState,
  changeTimeToDate,
  dateFormat
};
