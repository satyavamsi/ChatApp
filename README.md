## Overview

This project was built using React.js as frontend with firebase as backend.

The design is inspired from Slack.

Users have to sign-in using their google account. 
I am not storing any user information anywhere its just to get the username and the user profile image for the application.

The authentication module is done using firebase Google authentication.

Once the user is logged in he can create channels and post comments on any channel.

All the channel details and messages are stored in firestore.

All the communication happens real-time, thanks to firebase and useEffect() hook of React functional components.


## Planned Updates

I am planning to link channels to specific users so that they can have channels of their own and they can invite users if they want so that the channels will be private. 
