<script setup lang="ts">
import Badge from './components/Badge.vue'
</script>

<template>




    <body class="flex justify-center content-center">
        <!-- outer container -->
        <div class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
            <!-- header (profile) -->
            <header>
                <!-- social icons-->
                <ul class="flex flex-wrap justify-end gap-2">
                    <!-- linkedin -->
                    <li>
                        <a href="https://www.linkedin.com/in/antoine-bon-1b23b012b/"
                            class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                            target=”_blank”>
                            <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/BonAntoine"
                            class="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                            target=”_blank”>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <g fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                        fill="currentColor" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <!-- <li>
                    <a href="https://dev.to/"
                        class="bg-black p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                        target=”_blank”>
                        <svg class="w-5 h-5" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet"
                            viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg" width="2500"
                            height="2321">
                            <g fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                                    fill="currentColor" />
                            </g>
                        </svg>
                    </a>
                </li> -->
                </ul>
                <div class="flex justify-between items-center">
                    <div>
                        <img class="bg-cover bg-no-repeat rounded-full h-52 w-52" src="./assets/profil.jpg">
                        </img>
                    </div>
                    <div class="grid justify-items-end">
                        <h1 class="text-7xl font-extrabold">Antoine Bon</h1>
                        <p class="text-xl mt-5">Développeur Full Stack</p>
                    </div>
                </div>
            </header>
            <!-- detailed info -->
            <main class="flex gap-x-10 mt-10">
                <div class="w-2/6">
                    <!-- contact details -->
                    <strong class="text-xl font-medium">Coordonnées</strong>
                    <ul class="mt-2 mb-10">
                        <li class="px-2 mt-1"><strong class="mr-1">Téléphone </strong>
                            <a href="tel:+33782084175" class="block">07 82 08 41 75</a>
                        </li>
                        <li class="px-2 mt-1"><strong class="mr-1">E-mail </strong>
                            <a href="mailto:" class="block">bon.antoine.ab@gmail.com</a>
                        </li>
                        <li class="px-2 mt-1"><strong class="mr-1">Adresse</strong><span class="block">59112
                                Annoeullin</span></li>
                    </ul>

                    <!-- skills -->
                    <strong class="text-xl font-medium">Skills</strong>
                    <ul class="mt-2 flex">

                        <li class="px-2 mt-1">Vue</li>
                        <li class="px-2 mt-1">React</li>
                        <li class="px-2 mt-1">Angular</li>
                        <li class="px-2 mt-1">Svelte</li>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="flex mt-2">
                        <li class="px-2 mt-1">NestJS</li>
                        <li class="px-2 mt-1">Node.js</li>
                        <li class="px-2 mt-1">Go</li>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="mt-2 flex">
                        <li class="px-2 mt-1">Typescript</li>
                        <li class="px-2 mt-1">Javascript</li>
                        <li class="px-2 mt-1">HTML</li>
                        <li class="px-2 mt-1">CSS</li>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="mt-2 mb-10 flex">
                        <li class="px-2 mt-1">ESLint</li>
                        <li class="px-2 mt-1">Prettier</li>
                        <li class="px-2 mt-1">Tailwind</li>
                    </ul>
                    <strong class="text-xl font-medium">Centres d'intérêt</strong>
                    <ul class="mt-2">
                        <li class="px-2 mt-1">Course sur route et trail, marathon</li>
                        <li class="px-2 mt-1">Randonnées, trek</li>
                        <li class="px-2 mt-1">Guitare</li>
                    </ul>
                </div>



                <div class="w-5/6">

                    <!-- work experiences -->
                    <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Expériences professionnelles</h2>


                    <section>

                        <ul class="">
                            <li class="">
                                <div>
                                    <p class="text-slate-400">Atos</p>
                                </div>
                                <p class="flex justify-between text-sm"><strong class="text-base">Renault</strong></p>

                                <!--TCR - connect-->
                                <p class="flex justify-between text-base my-2">
                                    Développeur Full Stack techlead Back
                                <p>Avr. 2024 - Jui. 2024</p>
                                </p>
                                <p class="text-justify text-xs">
                                    Application ce centralisation de KPI pour les usines de production, avec pour
                                    objectif final d'être présenté sur écrans géants et piloté à distance.
                                <ul class="list-disc mt-2">
                                    <li>Développeur full stack avec NestJS</li>
                                    <li>Tests unitaire (white box)</li>
                                    <li>Utilisation de l'API Looker de Google</li>
                                    <li>Websocket avec Socket.io</li>
                                </ul>
                                </p>

                                <!-- Sanofi -->
                                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold"></h2>

                                <p class="flex justify-between text-sm pt-2"><strong class="text-base">Sanofi</strong>
                                </p>

                                <p class="flex justify-between text-base my-2">Développeur Full Stack
                                <p>Fev. 2024 - Mai. 2024</p>
                                </p>
                                <p class="text-justify text-xs">Centralisateur et comparateur de KPI pour les
                                    différentes
                                    usines avec gestion d'éléments de conseils de performance.

                                <ul class="list-disc mt-2">
                                    <li>Développeur full stack avec NestJS</li>
                                    <li>Tests unitaires et e2e</li>
                                    <li>Querying SQL avec TypeORM pour la partie BDD</li>
                                    <li>Qualité de code - Sonarqube</li>
                                </ul>
                                </p>

                                <!-- Hub'l -->
                                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold"></h2>

                                <p class="flex justify-between text-sm pt-2"><strong class="text-base">Renault</strong>
                                </p>

                                <p class="flex justify-between text-base my-2">Développeur Front-end & Architect
                                <p>Nov. 2022 - Fev. 2024</p>
                                </p>
                                <p class="text-justify text-xs">Outil de gestion interne à l'entreprise client, avec un
                                    modèle de données à remanier et de multiples contraintes.

                                <ul class="list-disc mt-2">
                                    <li>Développement de formulaires complexes avec sauvegarde automatique</li>
                                    <li>Travail dans une équipe à travers l'internationale</li>
                                    <li>Force de proposition auprès des UX/UI, DBA, Backend et testeur</li>
                                    <li>Qualité de code</li>
                                    <li>Test e2e (black box testing)</li>
                                </ul>
                                </p>

                            </li>

                        </ul>
                    </section>

                    <section>
                        <ul>
                            <li class="">
                                <!-- Advise -->
                                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold"></h2>
                                <div>
                                    <p class="text-slate-400">Eviden</p>
                                </div>

                                <p class="flex justify-between text-sm pt-2"><strong class="text-base">SNCF</strong></p>
                                <p class="flex justify-between text-base my-2">Développeur Full Stack - GCP & 3D
                                <p>Oct. 2021 - Jui. 2022</p>
                                </p>
                                <p class="text-justify text-xs">Création d'un site web d'édition et d'édition et de
                                    visualisation de contenu immersif 3D en interche d'abord chez Atos, et pour des
                                    clients finaux comme la SNCF, ou musées et magasins.

                                <ul class="list-disc my-2">
                                    <li>Développement d'une architecture dite futur-proof</li>
                                    <li>Optimisation et conception de scène 3D dans un site web avec BabylonJS</li>
                                    <li>Support multi utilisateur et partage d'expérience immersive</li>
                                </ul>
                                </p>

                                <!-- Pj avec Damien & Claire -->
                                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold"></h2>

                                <p class="flex justify-between text-sm pt-2"><strong class="text-base">Ugap</strong></p>

                                <p class="flex justify-between text-base my-2">Consultant technique
                                <p>Fev. 2021 - Oct. 2021</p>
                                </p>
                                <p class="text-justify text-xs">Développement d'un site web contenant multiple
                                    formulaire et gestion de droit pour un acteur du secteur public
                                </p>

                                <!-- Koela -->
                                <h2 class="text-2xl mt-6 pb-1 border-b font-semibold"></h2>

                                <p class="flex justify-between text-base my-2">Développeur Full Stack
                                <p>Avr. 2019 - Fev. 2021</p>
                                </p>
                                <p class="text-justify text-xs">Développement d'un outil interne de gestion interne
                                    d'emploi du
                                    temps et de coût.

                                <ul class="list-disc my-2">
                                    <li>Architecture from scratch</li>
                                    <li>Participation méthode Scrum (gestion des tâche et formation nouveaux arrivants)
                                    </li>
                                    <li>Dockerisation du projet</li>
                                    <li>Import/export Excel</li>
                                    <li>Test e2e Front end avec Cypress</li>
                                </ul>
                                </p>
                            </li>
                        </ul>
                    </section>


                    <!-- <section> 
                        <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Projets personnels</h2>
                        <ul class="mt-1">
                            <li class="py-2">
                                <div class="flex justify-between my-1">
                                    <strong>Rules of 10000 hours</strong>
                                    <p class="flex">
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                    </p>
                                </div>
                                <ul class="flex mb-2">
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                    </li>
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                    </li>
                                </ul>
                                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                                    delectus labore enim in minus quod vero dignissimos et, ratione obcaecati quis
                                    maiores? Voluptatem, natus cupiditate perferendis omnis ex hic incidunt!
                                    Earum dolore cupiditate sed et maxime distinctio iure fugiat aspernatur at veniam
                                    laudantium eveniet corporis dicta reiciendis quod consequatur, labore perferendis
                                    dolorum velit quibusdam minus iste dolorem! Officiis, obcaecati maxime</p>
                            </li>
                            <li class="py-2">
                                <div class="flex justify-between my-1">
                                    <strong>Vending Machine</strong>
                                    <p class="flex">
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                    </p>
                                </div>
                                <ul class="flex mb-2">
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                    </li>
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                    </li>
                                </ul>
                                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                                    expedita illum optio porro suscipit rerum labore veritatis autem eum totam veniam
                                    repudiandae repellendus perspiciatis eligendi sequi maiores, cum ipsa ut!
                                    Dolorum aliquid quaerat, dolore nemo, vero alias non porro quam totam impedit
                                    repellat voluptas, nobis harum quae dolorem accusantium consequatur. Recusandae
                                    cupiditate possimus natus consequuntur aliquid, molestias provident saepe nobis.
                                </p>
                            </li>
                            <li class="py-2">
                                <div class="flex justify-between my-1">
                                    <strong>Landing Page</strong>
                                    <p class="flex">
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                        <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
                                        <span
                                            class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
                                    </p>
                                </div>
                                <ul class="flex mb-2">
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                    </li>
                                    <li><a href="#"
                                            class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                    </li>
                                </ul>
                                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                    odio autem non possimus adipisci, sed sequi culpa ipsa necessitatibus repellat
                                    rerum. Obcaecati nobis modi voluptate nam minus praesentium soluta voluptatibus!
                                    Minima temporibus deserunt laborum, expedita ad molestiae perferendis? Ipsa aut,
                                    necessitatibus expedita rem iure minus sit voluptates magni, sequi eum architecto
                                    excepturi tempora dolorum soluta quam odit amet nobis incidunt.</p>
                            </li>
                        </ul>
                    </section> -->

                    <section>
                        <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Formations</h2>
                        <p class="mt-4 text-xs">
                        <ul>
                            <li>Svelte - Mai 2024</li>
                            <li>Vue - Janvier 2024</li>
                            <li>Sécurité web m2i - Mars 2024</li>
                            <li>Industrialisation et automatisation des tests - Mai 2022</li>
                        </ul>
                        </p>

                    </section>


                    <section>
                        <!-- education -->
                        <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Parcours scolaire</h2>
                        <ul class="mt-2">
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Master E-Services</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Campus de Lille 1, alternance Atos</p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Licence 3 informatique</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Stage Atos</p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">DUT IUT A Lille 1</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Stage à l'étranger à Glasgow, projet Drawinguess
                                </p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Bac S spé ISN</strong>2022-2019
                                </p>
                                <p class="flex text-sm">
                                <p class="mr-2">Projet</p><a
                                    href="http://debonmatin.free.fr/monpremierjeu/Ex1.html">Warcross</a></p>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
            <!-- short lines to introduce myself
      <footer class="mt-6">
        <p class="bg-gray-600 text-white text-center text-xs pt-2">The best way to predict the future is to
          create it. <small>- AbrahamLincoln</small>
        </p>
        <p class="bg-gray-600 text-white text-center text-sm pb-2">I am creating my future by learning new things
          and
          making small progresses everyday.</p>
      </footer> -->
        </div>
    </body>





</template>
