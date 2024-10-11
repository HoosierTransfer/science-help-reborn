<script lang="ts">
    let navbar: HTMLElement;
    let handle: HTMLDivElement;

    let timeoutNavbar: number;
    let timeoutHandle: number;

    function openBar() {
        navbar.classList.remove('invisible');
        navbar.classList.remove('translate-y-[120%]');
        handle.classList.add('translate-y-[280%]');

        clearTimeout(timeoutNavbar);
        timeoutHandle = setTimeout(() => {
            handle.classList.add('invisible');
        }, 500);
    }

    function closeBar() {
        navbar.classList.add('translate-y-[120%]');
        handle.classList.remove('invisible');
        handle.classList.remove('translate-y-[280%]');
        timeoutNavbar = setTimeout(() => {
            navbar.classList.add('invisible');
        }, 500);
        clearTimeout(timeoutHandle);
    }
</script>

<div class="z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2" on:mouseenter={openBar} on:focus={openBar} on:mouseleave={closeBar} role="navigation">
    <div class="z-50 absolute w-3/4 h-2 rounded-full bottom-0 bg-neutral-500 m-auto mb-3 left-1/2 transform -translate-x-1/2 transition ease-in-out duration-500" bind:this={handle}></div>

    <nav class="transition ease-in-out duration-500 invisible mb-3 transform translate-y-[120%]" bind:this={navbar}>
        <div class="bg-dark-navbar p-2.5 rounded-xl flex gap-2 backdrop-blur-md">
            <a href="games" class="w-16 h-16 bg-dark-navbar-button rounded-xl transition ease-in-out duration-200 text-text-color shadow-low-opacity-black shadow-md text-center leading-16 transform hover:scale-105 active:scale-95 active:bg-dark-navbar-button-hover active:text-neutral-800">
                <i class="fa-solid fa-gamepad fa-2x align-middle"></i>
            </a>
            <a href="sites" class="w-16 h-16 bg-dark-navbar-button rounded-xl transition ease-in-out duration-200 text-text-color shadow-low-opacity-black shadow-md text-center leading-16 transform hover:scale-105 active:scale-95 active:bg-dark-navbar-button-hover active:text-neutral-800">
                <i class="fa-regular fa-window fa-2x align-middle"></i>
            </a>
            <a href="search" class="w-16 h-16 bg-dark-navbar-button rounded-xl transition ease-in-out duration-200 text-text-color shadow-low-opacity-black shadow-md text-center leading-16 transform hover:scale-105 active:scale-95 active:bg-dark-navbar-button-hover active:text-neutral-800">
                <i class="fa-solid fa-magnifying-glass fa-2x align-middle"></i>
            </a>
            <a href="settings" class="w-16 h-16 bg-dark-navbar-button rounded-xl transition ease-in-out duration-200 text-text-color shadow-low-opacity-black shadow-md text-center leading-16 transform hover:scale-105 active:scale-95 active:bg-dark-navbar-button-hover active:text-neutral-800">
                <i class="fa-solid fa-sliders fa-2x align-middle"></i>
            </a>

            <div class="h-16 w-2 rounded-full bg-zinc-500"></div>

            <a href="home" class="w-16 h-16 bg-dark-navbar-button rounded-xl transition ease-in-out duration-200 text-text-color shadow-low-opacity-black shadow-md text-center leading-16 transform hover:scale-105 active:scale-95 active:bg-dark-navbar-button-hover active:text-neutral-800">
                <i class="fa-solid fa-house fa-2x align-middle"></i>
            </a>
        </div>
    </nav>
</div>