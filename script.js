document.addEventListener('DOMContentLoaded', function() {
    const filmContainer = document.getElementById('filmContainer');
    const hoverFilm = document.getElementById('hoverFilm');
    const filmImage = document.getElementById('filmImage');
    const filmTitle = document.getElementById('filmTitle');
    const filmSubtitle = document.getElementById('filmSubtitle');
    const filmReleased = document.getElementById('filmReleased');
    const filmBudget = document.getElementById('filmBudget');
    const filmDescription = document.getElementById('filmDescription');

    filmContainer.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('film')) {
            const filmData = getFilmData(event.target.id);
            filmImage.src = filmData.image;
            filmTitle.textContent = filmData.title;
            filmSubtitle.textContent = filmData.subtitle;
            filmReleased.textContent = `Released: ${filmData.released}`;
            filmBudget.textContent = `Budget: ${filmData.budget}`;
            filmDescription.textContent = filmData.description;
        }
    });

    hoverFilm.addEventListener('mouseover', function() {
        const rightFilmData = getFilmData(hoverFilm.id);
        console.log(rightFilmData);

        filmImage.src = rightFilmData.image;
        filmTitle.textContent = rightFilmData.title;
        filmSubtitle.textContent = rightFilmData.subtitle;
        filmReleased.textContent = `Released: ${rightFilmData.released}`;
        filmBudget.textContent = `Budget: ${rightFilmData.budget}`;
        filmDescription.textContent = rightFilmData.description;
    });

    function getFilmData(filmId) {
        const filmsData = {
            film1: {
                image: './image/harry-right.jpg',
                title: 'Harry Potter',
                subtitle: "and the Sorcerer's Stone",
                released: 2001,
                budget: '$125 million',
                description: '"Harry Potter and the Sorcerer\'s Stone" is a fantastical adventure film based on J.K. Rowling\'s novel. It follows Harry, a young wizard who discovers his magical abilities and attends Hogwarts School of Witchcraft and Wizardry...'
            },
            film2: {
                image: './image/2Честная_игра_2023Right.jpg',
                title: 'Fair Play (2023)',
                subtitle: '',
                released: 2023,
                budget: '$0 million',
                description: '"Fair Play" is a gripping sports drama released in 2023. The film revolves around the story of a struggling high school soccer team striving to overcome internal conflicts and external pressures to achieve success...'
            },
            film3: {
                image: './image/3RightImages.jpg',
                title: 'Sister Death',
                subtitle: '',
                released: 2023,
                budget: '$0 million',
                description: '"At the Fantastic Paviliol of the Cannes Marché du Film, weve announced that Paco Plaza will be in charge of kicking off this years edition. Hermana muerte, a production of El Estudio for Netflix, will be the opening film. Written by Jorge Guerricaechevarría and starring Aria Bedmar, Almudena Amor and Maru Valdivielso, the seventh solo feature film by the Valencian filmmaker will take us to his homeland for the first time.'
            },
            film4: {
                image: './image/4Right.jpg',
                title: 'No Hard Feelings',
                subtitle: '',
                released: 2023,
                budget: '$40 million',
                description: 'On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying.'
            },
            film5: {
                image: './image/5Right.jpg',
                title: 'Heart of Stone',
                subtitle: '',
                released: 2023,
                budget: '$150 million',
                description: 'Heart of Stone is a 2023 American spy action thriller film directed by Tom Harper from a screenplay by Greg Rucka and Allison Schroeder and a story by Rucka. The film stars Gal Gadot, Jamie Dornan, Alia Bhatt (in her Hollywood debut), Sophie Okonedo, and Matthias Schweighöfer. Its plot follows an international intelligence operative who must embark on a dangerous mission to protect a mysterious artificial intelligence system known as "The Heart". She is tasked by the peacekeeping operation known as Charter to keep the object safe from falling into enemy hands.'
            },
            film6: {
                image: './image/6Right.jpg',
                title: 'Interstellar',
                subtitle: '',
                released: 2014,
                budget: '$165 million',
                description: '"Interstellar" is a science fiction film directed by Christopher Nolan. The movie follows a team of astronauts who embark on a journey through a wormhole near Saturn in search of a new habitable planet for humanity, as Earth is facing environmental collapse. The film explores themes of love, sacrifice, and the nature of time as the crew encounters various challenges and scientific phenomena during their interstellar voyage. With stunning visuals and an emotional narrative, "Interstellar" delves into the complexities of human existence and our relationship with the universe.'
            },
            film7: {
                image: './image/7Right.jpg',
                title: 'The Truman Show',
                subtitle: '',
                released: 1999,
                budget: '$264,1 million',
                description: '"The Truman Show" is a satirical comedy-drama directed by Peter Weir. The film stars Jim Carrey as Truman Burbank, a man who unknowingly lives his entire life on a reality TV show. Trumans every move is broadcast to the world, and he is unaware that his surroundings and relationships are carefully orchestrated by the shows creator. As Truman begins to question the authenticity of his world, he sets out on a journey to discover the truth behind his existence. "The Truman Show" explores themes of free will, media manipulation, and the search for personal identity in a thought-provoking and often humorous manner.'
            },
            film8: {
                image: './image/8Right.jpg',
                title: 'The Grand Budapest Hotel',
                subtitle: '',
                released: 2014,
                budget: '$0  million',
                description: '"The Grand Budapest Hotel" - Director: Wes Anderson The Grand Budapest Hotel" is a whimsical comedy-adventure directed by Wes Anderson. Set in the fictional European country of Zubrowka, the film follows the adventures of Gustave H., a legendary concierge at the famous Grand Budapest Hotel, and Zero Moustafa, his loyal lobby boy. The story unfolds as they become embroiled in a plot involving a priceless Renaissance painting and a family fortune, amidst a backdrop of political upheaval and war.'
            },
            film9: {
                image: './image/9Right.jpg',
                title: 'La La Land',
                subtitle: '',
                released: 2016,
                budget: '$30  million',
                description: '"La La Land" is a modern musical directed by Damien Chazelle. Set in Los Angeles, the film tells the story of Mia, an aspiring actress, and Sebastian, a jazz musician, as they pursue their dreams in a city known for its glamour and romance. As they navigate the challenges of love and ambition, Mia and Sebastian discover the sacrifices and compromises required to achieve success in the competitive world of entertainment.'
            },
            film10: {
                image: './image/10Right.jpg',
                title: 'The Social Network',
                subtitle: '',
                released: 2010,
                budget: '$40 million',
                description: '"The Social Network" is a biographical drama directed by David Fincher. The film chronicles the founding of Facebook and the legal battles that ensued among its co-founders, most notably Mark Zuckerberg and his former associates. Through a series of flashbacks and courtroom scenes, "The Social Network" explores themes of friendship, betrayal, and the disruptive power of technology in shaping modern society.'
            },
            film11: {
                image: './image/11Right.jpg',
                title: 'Alien',
                subtitle: '',
                released: 1979,
                budget: '$11 million',
                description: '"Alien" is a seminal science fiction horror film directed by Ridley Scott. Set in the distant future aboard the commercial spacecraft Nostromo, the story follows a crew of astronauts who encounter a deadly extraterrestrial creature that infiltrates their ship. As they fight for survival against the relentless alien threat, tensions rise and loyalties are tested in this atmospheric and suspenseful masterpiece.'
            },
            film12: {
                image: './image/12Right.jpg',
                title: 'Forrest Gump',
                subtitle: '',
                released: 1994,
                budget: '$55 million',
                description: '"Forrest Gump" is a heartwarming drama directed by Robert Zemeckis. The film follows the remarkable life of Forrest Gump, a kind-hearted and intellectually challenged man from Alabama, who unwittingly finds himself at the center of several pivotal moments in American history. Through his simple yet profound perspective, Forrest touches the lives of those around him and teaches valuable lessons about love, courage, and the power of perseverance.'
            },
          

        };

        return filmsData[filmId] || {};
    }
});
