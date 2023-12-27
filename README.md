# Kanpla challenge

## Business case

We aim to develop a user-friendly system to manage a network of canteens across various locations. This system will enable easy searching for a specific selection of locations, organizing canteens in a hierarchy to ensure efficient management and data accuracy. To add complexity, let's assume that the number of canteens is very large and should be managed on the server. Only the searched portion of the hierarchy tree will be displayed to the client.

## Possible improvements

- **Selection persistence:** part of the task was to persist selections, a suggested solution was to write it to a file. As a selection is user-specific and there is no mechanism of recognising users apart from their IP address (which might be problematic) or setting each user a session cookie, I decided to store the selection of locations to client's local storage, as it made a bit more sense to me. If we wanted to store user selection on the server, the best solution would of course be to use a database accessed via a repository (similar to `locationRepo`) and store it along with a user identifier. 

- **Location selection propagation:** I did not implement the propagation of selected locations (when a group is selected, all of its children should also get selected) - this was due to rather busy Christmas holidays and approaching deadline which we agreed upon to reach a conclusion. I assume it would take me few more hours, there is a *TODO* in the code indicating where and how the feature would get implemented.
