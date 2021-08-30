<template>
    <section class="inner-content register">
        <div class="content-wrapper w-full text-white">
            <div class="title">
                <h2>Registrati Oggi</h2>
            </div>
            <div class="content flex py-5">
                <div class="column">
                    <p>
                        Get access to maintain your own
                        <em>custom personal lists</em>,
                        <em>track what you've seen</em> and search and filter
                        for <em>what to watch next</em>—regardless if it's in
                        theatres, on TV or available on popular streaming
                        services like Netflix, Disney Plus, and Amazon Prime
                        Video.
                    </p>
                    <p class="button">
                        <a href="#">Registrati</a>
                    </p>
                </div>
                <div class="column">
                    <ul class="ml-5 list-outside list-disc">
                        <li>Goditi TMDB senza pubblicità</li>
                        <li>Mantieni la watchlist personale</li>
                        <li>
                            Filtra secondo i tuoi servizi di streaming e trova
                            qualcosa da vedere
                        </li>
                        <li>
                            Tieni traccia dei film e delle serie TV che hai
                            visto
                        </li>
                        <li>Crea liste personalizzate</li>
                        <li>Contribuisci e migliora il nostro database</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.register {
    background-image: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg');

    .title {
        h2 {
            font-weight: 700;
            font-size: 2em;
        }
    }

    .content {
        .column {
            &:first-of-type {
                width: 65%;
                margin-right: 40px;
            }
            p {
                font-size: 1.2em;
            }

            p.button {
                margin-bottom: 10px;
                margin-top: 30px;

                a {
                    border: 2px solid #805be7;
                    border-radius: 5px;
                    padding: 8px 16px;
                    transition: linear 0.1s;
                    background-color: rgb(128, 91, 231);
                    font-size: 0.9em;
                    font-weight: 600;
                }
            }
            li {
                opacity: 0.8;
            }
        }
    }
}
</style>