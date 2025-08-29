<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-12 gap-4 mt-5">
            <!-- Main content -->
            <div class="col-span-12 lg:col-span-9">
                <div class="bg-white rounded-3xl shadow p-8">
                    <!-- Hero section -->
                    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <!-- Avatar -->
                        <NuxtImg
                            src="https://up2client.com/envato/arya-stark/html/main-file/light-mode/layout_two/background-snow-img/assets/images/home-images/portfolio-girl.jpg"
                            alt="Nguyen Long Dang"
                            width="128"
                            height="128"
                            format="webp"
                            quality="80"
                            sizes="128px sm:160px lg:192px"
                            class="rounded-full ring-4 ring-blue-100 shadow"
                        />

                        <!-- Text -->
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900">
                                Hi there <span class="inline-block origin-[70%_70%] animate-[wave_2s_infinite]">👋</span>, I’m
                                <span class="text-primary">Nguyen Long Dang</span>
                            </h1>

                            <TypingSubtitle />

                            <p class="mt-2 text-gray-700">
                                I am a passionate software developer who loves building clean, modern, and scalable web
                                applications. With experience across both frontend and backend development, I enjoy solving
                                complex problems, designing intuitive user interfaces, and bringing ideas to life through
                                technology. On this site, you’ll find my journey, skills, and the projects I’ve worked on
                                throughout my career.
                            </p>

                            <!-- Call-to-action -->
                            <div class="mt-6 flex gap-3">
                                <UButton
                                    to="/projects"
                                    variant="solid"
                                >
                                    View Projects
                                </UButton>
                                <UButton
                                    to="/contact"
                                    color="info"
                                    variant="outline"
                                >
                                    Contact Me
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-span-12 lg:col-span-3">
                <div class="bg-white rounded-3xl shadow p-6 space-y-4">
                    //
                </div>
            </div>
        </div>
    </div>
</template>
