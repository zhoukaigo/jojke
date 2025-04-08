const jokes = [
    '为什么程序员总是分不清万圣节和圣诞节？因为 Oct 31 = Dec 25',
    '世界上最有耐心的职业是什么？程序员，他们可以等一个代码运行一整天。',
    '妈妈：你为什么要学编程？儿子：因为我不想再点击"我同意服务条款"了。',
    '有一天，我的代码竟然一次就通过了测试...然后我就醒了。',
    '为什么程序员不喜欢户外运动？因为他们害怕遇到bug。',
    '什么时候程序员最开心？写代码时遇到问题，一谷歌就找到答案的时候。',
    '如何让程序员疯掉？给他一个文件名叫 "file.txt.txt.txt"',
    '程序员最讨厌什么节日？Debug节。',
    '如何形容一个内存不足的程序员？没什么RAM用了。',
    '程序员最喜欢的饮料是什么？Java咖啡。'
];

let currentJokeIndex = -1;

function getRandomJoke() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * jokes.length);
    } while (newIndex === currentJokeIndex && jokes.length > 1);
    
    currentJokeIndex = newIndex;
    return jokes[currentJokeIndex];
}

function displayNewJoke() {
    const jokeText = document.getElementById('joke-text');
    jokeText.textContent = getRandomJoke();
}

document.getElementById('next-button').addEventListener('click', displayNewJoke);

// 页面加载时显示第一个笑话
displayNewJoke();