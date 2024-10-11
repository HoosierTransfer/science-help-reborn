<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    let thing = "This is a placeholder";
    let messages = ["skibidi toilet", "talk tuah is a good podcast"];

    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    let index = 0;
    (async () => {
    let thing2 = messages[Math.floor(Math.random() * messages.length)];
    thing = thing2;
    for (let k = 0; k < thing2.length; k++) {
        for (let j = 0; j < 6; j++) {
            for (let i = index; i < thing.length; i++) {
                thing =
                    thing.slice(0, i) +
                    generateRandomLetter() +
                    thing.slice(i + 1);
            }
            await delay(1);
        }
        thing =
            thing.slice(0, index) + thing2[index] + thing.slice(index + 1);
        index++;
    }
    })();
    setInterval(async () => {
        let thing2 = messages[Math.floor(Math.random() * messages.length)];
        thing = thing2;
        index = 0;
        for (let k = 0; k < thing2.length; k++) {
            for (let j = 0; j < 6; j++) {
                for (let i = index; i < thing.length; i++) {
                    thing =
                        thing.slice(0, i) +
                        generateRandomLetter() +
                        thing.slice(i + 1);
                }
                await delay(1);
            }
            thing =
                thing.slice(0, index) + thing2[index] + thing.slice(index + 1);
            index++;
        }
    }, 5000);
</script>

<Navbar />

<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="font-rubik text-7xl font-bold text-text-color">
        Science Help Proxy
    </h1>
    <p class="text-text-color text-2xl font-jetbrains">{thing}</p>
</div>
