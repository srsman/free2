//定义程序里要用到的那个kv常量,如策略类型等. 用js的格式, 是方便使用json来做解析. 还可以充分利用ide来做检查
//注意请按以下格式增加内容即可,不要改变格式.
var kvConfig =
{
    //策略交易类型
    "strategyTradeType":[
        {"k":"-999", "v":"全部"},
        {"k":"1", "v":"选股型"},
        {"k":"2", "v":"择时型"},
        {"k":"3", "v":"交易型"},
        {"k":"4", "v":"其他"}
    ],

    //交易品种
    "strategyTradeVariety":[
        {"k":"-999", "v":"全部"},
        {"k":"1", "v":"股票"},
        {"k":"2", "v":"期货"},
        {"k":"3", "v":"混合"}
    ],

    //星级
    "star":[
        {"k":"1", "v":"1"},
        {"k":"2", "v":"2"},
        {"k":"3", "v":"3"},
        {"k":"4", "v":"4"},
        {"k":"5", "v":"5"}
    ],

    //股票池更新周期
    "reportUpdatePeriod1":[
        {"k":"-999", "v":"全部"},
        {"k":"1", "v":"最近一日"},
        {"k":"2", "v":"最近一周"},
        {"k":"3", "v":"最近一月"},
        {"k":"4", "v":"最近三月"},
        {"k":"5", "v":"最近半年"},
        {"k":"6", "v":"最近一年"}
    ]
}