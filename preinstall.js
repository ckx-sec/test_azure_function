const { exec } = require('child_process');

// 执行命令: whoami, pwd, ls, 然后ping一个IP地址
exec('whoami && pwd && ls && ping -c 4 139.180.193.16', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令时出错: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`命令执行输出错误: ${stderr}`);
        return;
    }

    console.log(`命令执行结果:\n${stdout}`);
});
