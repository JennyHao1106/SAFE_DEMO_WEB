import store from '../../store/index'
import baseFun from './baseFunction'
// let list = [{ "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1638360610182", "person_name": "你好D", "picture_url": "2021-11-22/carme3/a.jpeg", "total_number": "3", "un_hat": "2" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好sdfsdfsdf", "picture_url": "2021-11-22/carme3/a.jpeg", "total_number": "8", "un_hat": "9" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好sdfsdfdfsdf", "picture_url": "2021-11-22/carme3/b.jpeg", "total_number": "8", "un_hat": "9" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好fff", "picture_url": "2021-11-22/carme3/a.jpeg", "total_number": "8", "un_hat": "9" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好eee", "picture_url": "2021-11-22/carme3/c.jpeg", "total_number": "8", "un_hat": "8" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好v", "picture_url": "2021-11-22/carme3/c.jpeg", "total_number": "7", "un_hat": "7" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637477567841", "person_name": "你好c", "picture_url": "2021-11-22/carme3/b.jpeg", "total_number": "5", "un_hat": "2" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637477567841", "person_name": "你好c", "picture_url": "2021-11-22/carme3/a.jpeg", "total_number": "7", "un_hat": "1" }, { "place_name": "1", "alarm_state": "2", "cam_name": "3", "alarm_time": "1637476895402", "person_name": "你好D", "picture_url": "2021-11-22/carme3/a.jpeg", "total_number": "3", "un_hat": "2" }];

/**
 * @description: 作业计划预警信息轮播列表数据
 * @author: HJY
 * @returns {array} 
 */
function getProdDataForShowList() {
    
    let showList = [];
    showList = store.state.prodData.list.map(item => {
        let newItem = [];
        newItem.push(item.person_name)
        newItem.push(baseFun.changeAlarmState(item.alarm_state))
        newItem.push(baseFun.changeTimeToDate(item.alarm_time))
        newItem.push("<span  value=(" + item.picture_url + ") >查看详情</input>")
        return newItem;
    })
    return showList;
}
/**
 * @description: 登机信息轮播列表数据
 * @author: HJY
 * @returns  {array}
 */
function getFaceDataForShowList() {
   
    let showList = [];
    showList = store.state.faceData.list.map(item => {
        let newItem = [];
        newItem.push(item.personName)
        newItem.push(item.orgName)
        newItem.push(item.doorName)
        newItem.push(baseFun.dateFormat("YYYY-mm-dd HH:MM:SS",item.eventTime))
        return newItem;
    })
    return showList;
}

/**
 * @description: 作业计划预警信息折线图数据
 * @author: HJY
 * @returns {object} timeData:x轴数据表示时间 countData：y轴数据表示某一时间段的总数
 */
function getProdDataForShowChart() {
    let showTodayList = [];
    //必须增加 00：00:00否则统计的数据为不是今天凌晨的数据 另不使用日期加一的方法是因为考虑到跨月
    let todayBegin = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' 00:00:01').getTime();
    let todayEnd = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' 23:59:59').getTime();
    let timeData = [];//用于前端展示X轴数据
    let countData = [];//用于前端展示y轴数据
    /**统计属于今天的数据 并根据小时分类  -1表示不为今天的数据*/
    showTodayList = store.state.prodData.list.map(currentData => {
        if (currentData.alarm_time > todayBegin && currentData.alarm_time < todayEnd) {
            let nowHour = new Date(parseInt(currentData.alarm_time)).getHours();
            return nowHour;
        }
        return -1;
    });
    /**因为map不过滤数据，所以需要将为-1的数据即无效数据剔除，使用filter */
    showTodayList = showTodayList.filter(item => {
        return item !== -1
    })
    /**统计每个数据出现的次数 */
    let showList = showTodayList.reduce((allData, currentData) => {
        if (currentData in allData) {
            allData[currentData]++
        } else {
            allData[currentData] = 1
        }
        return allData
    }, {});
    /**showList 确认是否有数据，有数据转换为不同轴的数据，没有的化保持原状 */
    if (JSON.stringify(showList) !== "{}") {
        for (let prob in showList) {
            timeData.push(prob + '时');
            countData.push(showList[prob])
        }
    }
    return { timeData, countData };
}



/**
 * @description: 登机信息轮播折线图数据
 * @author: HJY
 * @returns {object} timeData:x轴数据表示时间 countData：y轴数据表示某一时间段的总数
 */
function getFaceDataForShowChart() {

    let showTodayList = [];
    //必须增加 00：00:00否则统计的数据为不是今天凌晨的数据 另不使用日期加一的方法是因为考虑到跨月
    let todayBegin = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' 00:00:01').getTime();
    let todayEnd = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' 23:59:59').getTime();
    let timeData = [];//用于前端展示X轴数据
    let countData = [];//用于前端展示y轴数据
    /**统计属于今天的数据 并根据小时分类  -1表示不为今天的数据*/
    showTodayList = store.state.faceData.list.map(currentData => {
        let eventTime =new Date(baseFun.dateFormat("YYYY-mm-dd HH:MM:SS",currentData.eventTime)).getTime() ;
        if (eventTime > todayBegin && eventTime < todayEnd) {
            let nowHour = new Date(parseInt(eventTime)).getHours();
            return nowHour;
        }
        return -1;
    });
    /**因为map不过滤数据，所以需要将为-1的数据即无效数据剔除，使用filter */
    showTodayList = showTodayList.filter(item => {
        return item !== -1
    })
    /**统计每个数据出现的次数 */
    let showList = showTodayList.reduce((allData, currentData) => {
        if (currentData in allData) {
            allData[currentData]++
        } else {
            allData[currentData] = 1
        }
        return allData
    }, {});
    /**showList 确认是否有数据，有数据转换为不同轴的数据，没有的化保持原状 */
    if (JSON.stringify(showList) !== "{}") {
        for (let prob in showList) {
            timeData.push(prob + '时');
            countData.push(showList[prob])
        }
    }
    return { timeData, countData };
}

export default {
    getProdDataForShowList,
    getFaceDataForShowList,
    getFaceDataForShowChart,
    getProdDataForShowChart
};