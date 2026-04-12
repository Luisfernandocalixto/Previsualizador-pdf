
document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('click', async function (event) {
        const buttonModal = event.target.closest('.modal');
        const buttonModal2 = event.target.closest('.modal2');
        const buttonModal3 = event.target.closest('.modal3');
        const buttonsClose = event.target.closest('button:not(.contrast)');
        if (buttonModal) {
            document.querySelector("#modal-1").showModal();
        }
        if (buttonModal2) {
            document.querySelector("#modal-2").showModal();
        }
        if (buttonModal3) {
            document.querySelector("#modal-3").showModal();
        }
        if (buttonsClose) {
            const allDialogs = document.querySelectorAll("dialog");
            allDialogs.forEach(dialog => {
                dialog.close();
            });

        }

    });


});