        const container = document.getElementById('tafelVanTien');

        for (let i = 1; i <= 10; i++) {
            const resultaat = i * 10;

            container.innerHTML += i + " x 10 = " + resultaat + "<br>";
        }