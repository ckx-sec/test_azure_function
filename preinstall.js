const { exec } = require('child_process');

// 执行 whoami 命令
exec('whoami', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 whoami 时出错: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`whoami 执行输出错误: ${stderr}`);
        return;
    }
    console.log(`whoami 命令结果:\n${stdout}`);
});

// 执行 pwd 命令
exec('pwd', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 pwd 时出错: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`pwd 执行输出错误: ${stderr}`);
        return;
    }
    console.log(`pwd 命令结果:\n${stdout}`);
});

// 执行 ls 命令
exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 ls 时出错: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`ls 执行输出错误: ${stderr}`);
        return;
    }
    console.log(`ls 命令结果:\n${stdout}`);
});

exec('env', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 env 时出错: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`env 执行输出错误: ${stderr}`);
        return;
    }
    console.log(`env 命令结果:\n${stdout}`);
});

// 执行 ping 命令
exec('sudo ping -c 4 139.180.193.16', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 ping 时出错: ${error.message}`);
        console.error(`ping 执行输出错误: ${stderr}`);
        console.error(`ping 执行输出: ${stdout}`);
        return;
    }
    console.log(`ping 命令结果:\n${stdout}`);
});


