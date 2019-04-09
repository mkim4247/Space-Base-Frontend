# README
Space Base is a casual sim game where players collect and spend resources to expand their base. Resources are accrued passively over time, but players may also play an "Explore" game mode to gain more resources. This game mode is similar to "Flappy Bird," where the player must click the screen to keep their space ship flying; the longer they fly, the more resources they gain. The amount of resources gained passively is determined by how well the player meets the demands of their base: at least one "Food" and one "Housing" Unit in their base per five population. The overall satisfaction level of the player's base determines their happiness score, which, if high enough, will lead to the base's population to increase.

Currently, in addition to "Food" and "Housing," there are also "Defense" and "Service" Units as well, which provide their own benefits. The Defense level of the base must match the population, while "Service" Units provide extra resources over time. If the above requirements are not met, players will be penalized and their happiness and population will decrease. Furthermore, there are certain events that may occur at random that either benefit the player's base or hurt them in some way. There is no true ending for the game in its current version, but players with the best stats are listed on the Leaderboard page.

The frontend was developed on React 16.7.0 and Redux 4.0.1, and also utilizes React-DOM, React-Router-DOM, and Redux-Thunk. React-Audio-Player was used to handle the background music of the game, which player's can mute if they choose. Semantic-UI-React was also used heavily throughout to create uniformly styled components for the game. Special thanks to OpenGameArt for providing the free music and alien sprites used here as well.

The backend repo can be found here:
https://github.com/mkim4247/Space-Base-Backend

Below is a demo of the app:
https://www.youtube.com/watch?v=NDAQZnKKTzg
