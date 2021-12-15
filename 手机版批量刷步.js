// 在下面添加你的账号信息和要刷的步数，格式为【账号#密码#步数】，可以添加多个，例如【"15312341234#123456#12000", "15312341234#123456#12000"】
var user_infos = [""]

launchApp("sportApp")

for(var i = 0; i < user_infos.length; i++){
    // 寻找小米运动入口
    sleep(2000)
    text("小米运动").findOne(5000)
    var login = text("小米运动").findOnce().bounds()
    click(login.centerX(), login.centerY())
    text("确定").findOne(5000)
    // 依次获取要刷步的账号信息
    var account = user_infos[i].split("#")[0]
    var password = user_infos[i].split("#")[1]
    var step = user_infos[i].split("#")[2]
    // 对所有的账号信息进行填充
    toastLog(account+"开始执行")
    className("android.widget.EditText").findOnce(0).setText(account);
    className("android.widget.EditText").findOnce(1).setText(password);
    className("android.widget.EditText").findOnce(2).setText(step);
    var submit = text("确定").findOnce().bounds()
    // 点击并等待结果反馈
    click(submit.centerX(), submit.centerY())
    sleep(1000)
    back()
}


