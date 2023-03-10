# Containers_Networks
Communication entre trois dockers containers:
- Container application Client : Passer les informations d'un formulaire vers le container de l'application serveur.

-  Container application Serveur:  Insérer les données reçues de la part de l'application client à un container de la base de données MongoDB.

-  Container de la base de données MongoDB.
Tous les containers sont communiquer à l'aide d'un network créé par la commande  docker network create my-network
