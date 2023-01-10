# Проєктування бази даних

## Модель бізнес-об'єктів
@startuml

entity User
entity User.name
entity User.login
entity User.password
entity User.email

User.name --* User
User.login -l-* User
User.password --* User
User.email --* User

entity Access
Access "0,*" -u- "1,1" User

entity Role
Role "1,1" -l- "0,*" Access
entity Role.name
entity Role.description
Role.name -u-* Role
Role.description -l-* Role

entity Request
Request "0,*" -r- "1,1" Access
entity Request.field
entity Request.filter
Request.field -u-* Request
Request.filter -u-* Request

entity Source
entity Date
entity Keywords
Source --u|> Request.filter
Date --u|> Request.filter
Keywords --u|> Request.filter

entity ID
entity Description
ID --u|> Request.field
Description --u|> Request.field

entity Result
Result "0,*" -- "1,1" Request
entity Result.id
entity Result.name
entity Result.description
Result.id --* Result
Result.name --* Result
Result.description --* Result


@enduml

# ER-модель

@startuml

entity User { name: TEXT login: TEXT password: TEXT email: TEXT role: TEXT }

entity Request { id: INT title: TEXT description: TEXT date: DATETIME }

entity Source { id: INT url: TEXT }

entity Filter { date_from: DATETIME date_to: DATETIME }

entity Help { id: INT title: TEXT description: TEXT }

entity Result { id: INT title: TEXT description: TEXT }

entity Access { role: TEXT }

User "1,1" -- "0," Access Access "0," -- "1,1" Request Access "0," -r- "1,1" Help Request "0," -- "1," Source Request "1,1" -u- "0," Result Request "0,1" -r- "1,1" Filter

@enduml

# Реляційна схема

<img src="images/schema.png">