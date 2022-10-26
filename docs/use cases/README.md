# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

**Загальна діаграма до вимог функціональності програми**  

@startuml
actor "Гість" as Guest
actor "Користувач" as User
actor "Адміністратор" as Admin

User -u-|> Guest
Admin -u-|> User

usecase "Реєстрація" as Registration

usecase "Авторизація" as Login
usecase "Запит на знаходження даних" as Search
usecase "Редагування профілю" as Edit
usecase "Управління джерелами" as Sources
usecase "Звертання за допомогою" as Help

usecase "Додавання джерела інформації" as AddSource
usecase "Надання прав користувачам" as Rights
usecase "Отримання статистики" as Statistic

Guest -> Registration

User -u-> Login
User -l-> Search
User --> Edit
User -> Help
User --> Sources

Admin -l-> AddSource
Admin --> Rights
Admin --> Statistic
@enduml  
  
  

@startuml
actor "Користувач" as User

usecase "Звертання за допомогою" as Help
usecase "До системи" as SystemHelp
usecase "До адміністратора" as AdminHelp

AdminHelp .u.> Help
SystemHelp .u.> Help

usecase "Управління джерелами" as Sources
usecase "Додати" as Add
usecase "Видалити" as Remove
usecase "Прийняти зміни" as Accept
usecase "Відмовитись від змін" as Cancel

Add .u.> Sources
Remove .u.> Sources
Accept .u.> Sources
Cancel .u.> Sources

User -> Help
User --> Sources
@enduml  
