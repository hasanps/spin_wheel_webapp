document.addEventListener("DOMContentLoaded", function () {
    const spinButton = document.getElementById("spinButton");

    spinButton.addEventListener("click", function () {
        // Simulate a reward between ₹1 and ₹20
        const rewardAmount = Math.floor(Math.random() * 20) + 1;

        alert("🎉 You won ₹" + rewardAmount);

        // Send the reward to Telegram
        Telegram.WebApp.sendData(JSON.stringify({
            reward: rewardAmount
        }));
    });
});