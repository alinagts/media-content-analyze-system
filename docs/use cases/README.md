# Модель прецедентів

**Загальна діаграма до вимог функціональності програми**  
Нижче наведені основні можливості для кожної с груп користувачів

@startuml  

    actor "Гість" as Guest  
    actor "Користувач" as User  
    actor "Адміністратор" as Admin  
  
    Guest  --|> User  
    User  --|> Admin 

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
    usecase "Скасувати зміни" as Cancel  

    Add .u.> Sources  
    Remove .u.> Sources  
    Accept .u.> Sources  
    Cancel .u.> Sources  

    User -> Help  
    User --> Sources  

@enduml      

### ГІСТЬ

**РЕЄСТРАЦІЯ**  
***Виключні ситуації:***  
1. Обліковий запис з введеними даними реєстрації вже існує (код помилки: user.reg_err1)  

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач натискає кнопку \nреєстрації;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує запит \nна реєстрацію;
        %darken("aliceblue", 6);line:blue;text:blue :Система надсилає форму \nреєстрації;
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач вводить логін, \nелектронну пошту та пароль;
        #TECHNOLOGY;line:green;text:green :Користувач натискає кнопку \nвідправки даних;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує дані;
        %darken("aliceblue", 6);line:blue;text:blue :Система реєструє обліковий \nзапис;
        note right #ffaaaa
            <b> user.reg_err1
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система оповіщує користувача \nпро успішне створення \nоблікового запису;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        stop

@enduml 

### КОРИСТУВАЧ

**АВТОРИЗАЦІЯ**  
***Виключні ситуації:***  
1. Облікового запису з введеними даними реєстрації не існує (код помилки: user.login_err1)  

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач натискає кнопку \nвходу;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує запит \nна авторизацію;
        %darken("aliceblue", 6);line:blue;text:blue :Система надсилає форму \nдля вводу даних;
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач вводить дані \nдля входу;
        #TECHNOLOGY;line:green;text:green :Користувач натискає кнопку \nвідправки даних;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує дані;
        %darken("aliceblue", 6);line:blue;text:blue :Система валідує дані;
        note right #ffaaaa
            <b> user.login_err1
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система надає користувачу \nдоступ до його облікового \nзапису;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:green;text:green :Користувач отримує доступ \nдо свого облікового запису;
        stop

@enduml 

**ЗАПИТ НА ЗНАХОДЖЕННЯ ТА АНАЛІЗ ДАНИХ**  
***Виключні ситуації:***  
1. Система не розпізнала введену користувачем інформацію(код помилки: user.search_err1)  
2. Система не знайшла інформації за запитом користувача(код помилки: user.search_err2)

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач надає запит \nна пошук інформації;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система надає користувачу \nформу з фільтрами;
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач обирає фільтри;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система надає користувачу \nінструмент для вибору проміжку часу;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:green;text:green :Користувач вводить \nбажаний проміжок часу;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує та обробляє \nзапит користувача по заданих \nпараметрах;
        note right #ffaaaa
            <b> user.search_err1
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система проводить пошук \nпо заданих параметрах;
        note right #ffaaaa
            <b> user.search_err2
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система формує звіт з даними, \nякі вона знайшла;
        %darken("aliceblue", 6);line:blue;text:blue :Система виводить результат \nпошуку на екран користувача;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        stop

@enduml 

**ЗВЕРТАННЯ ЗА ДОПОМОГОЮ ДО СИСТЕМИ**  
***Виключні ситуації:***  
1. Система не змогла ідентифікувати запит користувача(код помилки: user.help_err1)  

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач натискає кнопку \nзвернення до системи;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система надає користувачу \nформу для заповнення;
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач отримує доступ \nдля заповнення форми;
        #TECHNOLOGY;line:green;text:green :Користувач вписує текст \nсвого питання;
        #TECHNOLOGY;line:green;text:green :Користувач надсилає заповнену \nформу системі;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система аналізує проблему \nза ключовими словами;
        note right #ffaaaa
            <b> user.help_err1
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система надсилає необхідну \nдовідку;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:green;text:green :Користувач отримує довідку \nта ознайомлюється з нею;
        stop

@enduml 

**ЗВЕРТАННЯ ЗА ДОПОМОГОЮ ДО АДМІНІСТРАТОРА**  
***Виключні ситуації:***  
1. Користувач не зміг встановити зв'язок з адміністратором(код помилки: admin.help_err1)

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач здійснює виклик \nадміністратора;
        note left #ffaaaa
            <b> admin.help_err1
        end note
        #TECHNOLOGY;line:green;text:green :Користувач вказує на проблему \nз її описом адміністратору;
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор вирішує проблему \nкористувача;
        %lighten("pink", 7);line:red;text:red :Адміністратор інформує про \nзнайдене рішення користувача;
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач отримує вирішення \nпроблеми;
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор завершує контакт;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        stop

@enduml

### АДМІНІСТРАТОР

**ДОДАВАННЯ ДЖЕРЕЛА ІНФОРМАЦІЇ**  
***Виключні ситуації:***  
1. Нові джерела не пройшли перевірку (код помилки: admin.nsrc_err1)  

@startuml

    |%lighten("pink", 11)|Адміністратор|
        start
        %lighten("pink", 7);line:red;text:red :Адміністратор натискає кнопку \nдодання нового джерела інформації;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система надає форму для \nдодання нового джерела;
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор надає посилання \nна джерело;
        %lighten("pink", 7);line:red;text:red :Адміністратор надає опис джерела;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Джерело проходить перевірку \nна валідність;
        note right #ffaaaa
            <b> admin.nsrc_err1
        end note
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор налаштовує \nфільтри для пошуку джерела;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система додає нове джерело;
    |%lighten("pink", 11)|Адміністратор| 
        stop

@enduml

**НАДАННЯ ПРАВ КОРИСТУВАЧАМ**  
***Виключні ситуації:***  
1. Користувача не було знайдено в системі (код помилки: admin.arights_err1)  
2. Користувачу вже були надані всі додаткові права (код помилки: admin.arights_err2)  

@startuml

    |%lighten("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:green;text:green :Користувач надає запит \nна отримання додаткових прав;
        note left #ffaaaa
            <b> admin.arights_err1
        end note
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор отримує запит \nна додання прав;
        %lighten("pink", 7);line:red;text:red :Адміністратор надає додаткові \nправа користувачу;
        note right #ffaaaa
            <b> admin.arights_err2
        end note
    |%lighten("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:green;text:green :Користувач отримує додаткові \nправа;
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор завершує взаємодію;
    |%lighten("TECHNOLOGY", 7)|Користувач| 
        stop

@enduml

**ОТРИМАННЯ СТАТИСТИКИ**  
***Виключні ситуації:***  
1. Система не змогла зібрати статистику за певний проміжок часу (код помилки: admin.stat_err1)  

@startuml

    |%lighten("pink", 11)|Адміністратор|
        start
        %lighten("pink", 7);line:red;text:red :Адміністратор обирає проміжок \nчасу для збору даних;
        %lighten("pink", 7);line:red;text:red :Адміністратор робить запит \nна статистику на обраний час;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:blue;text:blue :Система отримує запит;
        %darken("aliceblue", 6);line:blue;text:blue :Система шукає дані за \nобраний проміжок часу;
        note right #ffaaaa
            <b> admin.stat_err1
        end note
        %darken("aliceblue", 6);line:blue;text:blue :Система надає дані;
    |%lighten("pink", 11)|Адміністратор|
        %lighten("pink", 7);line:red;text:red :Адміністратор отримує дані \nу відповідь на запит;
        %lighten("pink", 7);line:red;text:red :Адміністратор проводить аналіз \nданих;
        stop

@enduml
