let flow  = {
    "_id" : "60b502d7c1c921029404f4f6",
    "default" : true,
    "phrases" : [

    ],
    "steps" : [
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "ClassifyConv",
            "type" : "action",
            "action" : "classifyConv",
            "success" : "isIftarTime",
            "fail" : "isIftarTime",
            "field" : "Classification",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "isHoliday",
            "type" : "action",
            "success" : "Holiday welcome message",
            "action" : "isHoliday",
            "fail" : "isLess3H"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "isIftarTime",
            "success" : "IftarTime",
            "action" : "isIftarTimeB2C_EG",
            "fail" : "isHoliday",
            "type" : "action",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "isLess3H",
            "action" : "isLess3H",
            "waitForInput" : true,
            "success" : "IsWorking3H",
            "fail" : "IsLess24H",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "IsWorking3H",
            "action" : "IsWorking",
            "fail" : "OutOfWorkingStart",
            "repeat" : 0,
            "success" : "CheckAgentAvalibility",
            "type" : "action",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [
                {
                    "text" : "Welcome Back,\nLet me connect you to the agent who was assisting you earlier\nOr any available agent for further support.",
                    "language" : "en-US"
                },
                {
                    "text" : "مرحبا بك مرة اخرى\nهيتم تحويلك لنفس موظف خدمه العملاء لاستكمال اخر محادثة\nاو الموظف المتاح حاليا لمساعدتك",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "assingToConvAgent",
            "action" : "assingToAgent",
            "fail" : "",
            "type" : "failover",
            "clarification" : [
                {
                    "text" : "Welcome Back,\nLet me connect you to the agent who was assisting you earlier\nOr any available agent for further support.",
                    "language" : "en-US"
                },
                {
                    "text" : "مرحبًا بك مرة أخرى، سنقوم بتوصيلك بممثل خدمة العملاء الذي كان يساعدك سابقًا أو أي ممثل خدمة عملاء متاح لمزيد من الدعم.",
                    "language" : "ar-EG"
                }
            ],
            "effect" : "routed",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "120",
                "step" : "reminder2Min"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "مرحبا بك مره اخري, في شركة ال جي للالكترونيات مصر\nرمضان كريم 🌙\nعذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء )\nمواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا\nوقت الافطار بيتم وقف الخدمة من الساعة 05:30 مساءا الى الساعة 7:00 مساءا \nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت\nشكرا وسعداء بخدمة حضرتك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Welcome Back to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 5:30 PM ~ 7:00 PMT , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "name" : "less3H-OOO",
            "clarification" : [
                {
                    "text" : "مرحبا بك مره اخري, في شركة ال جي للالكترونيات مصر رمضان كريم 🌙 عذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء ) مواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا وقت الافطار بيتم وقف الخدمة من الساعة 05:30 مساءا الى الساعة 7:00 مساءا يمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت شكرا وسعداء بخدمة حضرتك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Welcome Back to LG Electronics Egypt Ramadan Kareem 🕌 Sorry but currently we are out of office hours. ( To speak to a live agent) Ramadan Working hours: All over the week from 09:00 AM~ 09:00 PM Iftar cut off time from 5:30 PM ~ 7:00 PMT , We will contact you back after Iftar time You can receive support through our Chatbot on the below categories Thank you and happy to serve you any time.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "type" : "failover",
            "cretical" : false,
            "repeat" : 1,
            "waitTime" : 0,
            "effect" : "Rejected - Out Of Working Hour Customer",
            "aiLabels" : [

            ],
            "action" : "closeAsRejected",
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "IsLess24H",
            "action" : "IsLess24H",
            "type" : "action",
            "success" : "IsWorking24H",
            "fail" : "IsLess30D",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "IsWorking24H",
            "success" : "check24HStatus",
            "action" : "IsWorking",
            "fail" : "OutOfWorkingStart",
            "type" : "action",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "check24HStatus",
            "type" : "action",
            "fail" : "WelcomeBack",
            "action" : "check24HStatus",
            "success" : "CheckAgentAvalibility",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "IsLess30D",
            "type" : "action",
            "action" : "IsLess30D",
            "fail" : "MORE-30-DAYS-IS-WORKING",
            "success" : "IsWorking30D",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "IsWorking30D",
            "type" : "action",
            "action" : "IsWorking",
            "fail" : "OutOfWorkingStart",
            "success" : "WelcomeBack",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsReturning",
            "action" : "IsReturning",
            "waitForInput" : true,
            "success" : "WelcomeBack",
            "fail" : "IsPMCairo",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsPMCairo",
            "action" : "IsPMCairo",
            "waitForInput" : true,
            "success" : "IsNoon",
            "fail" : "GreetingAM",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsNoon",
            "action" : "IsNoon",
            "waitForInput" : true,
            "success" : "GreetingEvening",
            "fail" : "GreetingPM",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "message",
            "name" : "GreetingAM",
            "next" : "Start",
            "messages" : [
                {
                    "text" : "صباح الخير\nمرحبًا بك فى شركه ال جى للإلكترونيات مصر يتم الرد من خلال وحدة الذكاء الاصطناعي \nيرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة \nقد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "Good Morning, \nWelcome to LG Electronics Egypt, I am your virtual smart assistant \nKindly note that this conversation will be recorded for training and quality purposes.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Start"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Start"
                },
                {
                    "entity" : "other",
                    "step" : "Start"
                }
            ],
            "waitTime" : 0,
            "field" : "legalScript",
            "aiLabels" : [

            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "MORE-30-DAYS-REMINDER"
            },
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "message",
            "name" : "GreetingEvening",
            "next" : "Start",
            "messages" : [
                {
                    "text" : "مساء الخير\nمرحبًا بك فى شركه ال جى للإلكترونيات مصر يتم الرد من خلال وحدة الذكاء الاصطناعي \nيرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة \nقد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "Good evening,\nWelcome to LG Electronics Egypt, I am your virtual smart assistant \nKindly note that this conversation will be recorded for training and quality purposes.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "field" : "legalScript",
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Disagree",
                    "step" : "Start"
                },
                {
                    "entity" : "Agree",
                    "step" : "Start"
                },
                {
                    "entity" : "other",
                    "step" : "Start"
                }
            ],
            "waitTime" : 0,
            "aiLabels" : [

            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "MORE-30-DAYS-REMINDER"
            },
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "message",
            "name" : "GreetingPM",
            "next" : "Start",
            "messages" : [
                {
                    "text" : "مساء الخير\nمرحبًا بك فى شركه ال جى للإلكترونيات مصر يتم الرد من خلال وحدة الذكاء الاصطناعي \nيرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة \nقد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "Good Afternoon,\nWelcome to LG Electronics Egypt, I am your virtual smart assistant \nKindly note that this conversation will be recorded for training and quality purposes.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "waitTime" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Start"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Start"
                },
                {
                    "entity" : "other",
                    "step" : "Start"
                }
            ],
            "field" : "legalScript",
            "aiLabels" : [

            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "MORE-30-DAYS-REMINDER"
            },
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "Start",
            "action" : "IsWorking",
            "waitForInput" : true,
            "success" : "Options",
            "fail" : "OutOfWorkingStart",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "OutOfWorkingStart",
            "next" : "Options-OOO",
            "messages" : [
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nرمضان كريم 🌙\nعذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء )\nمواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا\nوقت الافطار بيتم وقف الخدمة من الساعة 06:00 مساءا الى الساعة 07:30 مساءا \nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت\nشكرا وسعداء بخدمة حضرتك\n\n قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق ( 1 )",
                        "غير موافق ( 2 )"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Welcome to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 06:00 PM ~ 7:30 PM , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "( 1 ) Agree",
                        "( 2 ) Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق ( 1 )",
                        "غير موافق ( 2 )"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Welcome to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 06:00 PM ~ 7:30 PM , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "( 1 ) Agree",
                        "( 2 ) Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Options-OOO"
                }
            ],
            "cretical" : true,
            "waitTime" : 0,
            "field" : "legalScript",
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "expiry" : {
                "step" : "MORE-30-DAYS-OOO-REMINDER",
                "seconds" : "300"
            }
        },
        {
            "repeat" : 0,
            "type" : "break",
            "name" : "WelcomeBack",
            "next" : "Options",
            "messages" : [
                {
                    "text" : "Welcome Back,",
                    "language" : "en-US"
                },
                {
                    "text" : "مرحبًا بك مرة اخري,",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "expected" : [

            ],
            "cretical" : false,
            "field" : "legalScript",
            "clarification" : [
                {
                    "text" : "مرحبًا بك مرة اخري,",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Welcome Back,",
                    "language" : "en-US"
                }
            ],
            "waitTime" : 0,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Options",
            "cretical" : true,
            "messages" : [
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "للتحدث لخدمة العملاء"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Chat with a live agent"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "clarification" : [
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "للتحدث لخدمة العملاء"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Chat with a live agent"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Options-wrong"
                },
                {
                    "entity" : "LG_EGYPT_WHERE_TO_BUY",
                    "step" : "where_to_buy"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request"
                },
                {
                    "entity" : "LG_EGYPT_SERVICE_CENTER",
                    "step" : "service_center_dwh"
                },
                {
                    "entity" : "LG_EGYPT_ACCESSORIES_PURCHASE",
                    "step" : "accessories_purchase_menu_dwh"
                },
                {
                    "step" : "follow_up_main_dwh",
                    "entity" : "LG_EGYPT_FOLLOW_UP"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "180",
                "step" : "reminder30Min"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "mainMenue"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Options-wrong",
            "cretical" : true,
            "messages" : [
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "للتحدث لخدمة العملاء"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Chat with a live agent"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "clarification" : [
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "للتحدث لخدمة العملاء"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Chat with a live agent"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_WHERE_TO_BUY",
                    "step" : "where_to_buy"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request"
                },
                {
                    "entity" : "LG_EGYPT_SERVICE_CENTER",
                    "step" : "service_center_dwh"
                },
                {
                    "entity" : "LG_EGYPT_ACCESSORIES_PURCHASE",
                    "step" : "accessories_purchase_menu_dwh"
                },
                {
                    "step" : "follow_up_main_dwh",
                    "entity" : "LG_EGYPT_FOLLOW_UP"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "600",
                "step" : "reminder40Min"
            },
            "aiLabels" : [
                "WRONG ENTERY"
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Call Back Request"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "طلب الاتصال بك"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "name" : "Options-OOO",
            "type" : "message",
            "repeat" : 0,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_WHERE_TO_BUY",
                    "step" : "where_to_buy_ooo"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request"
                },
                {
                    "entity" : "LG_EGYPT_CALL_BACK_REQUEST",
                    "step" : "callback_request_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request"
                },
                {
                    "entity" : "LG_EGYPT_FOLLOW_UP",
                    "step" : "follow_up_main_ooo"
                },
                {
                    "entity" : "LG_EGYPT_ACCESSORIES_PURCHASE",
                    "step" : "accessories_purchase_menu_ooo"
                },
                {
                    "entity" : "LG_EGYPT_SERVICE_CENTER",
                    "step" : "service_center_ooo"
                }
            ],
            "clarification" : [
                {
                    "text" : "Please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Call Back Request"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "طلب الاتصال بك"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "cretical" : true,
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-OOO"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "SVC",
            "effect" : "Completed - Solution by Bot (SVC)",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "Please send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "SVC-wrong"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_30_min_reminder"
            },
            "aiLabels" : [
                "SVC"
            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "SVC-wrong",
            "effect" : "Completed - Solution by Bot (SVC)",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Sorry, but we didn't receive a correct answer from you.\nPlease send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "عذرا ، لكننا لم نتلق إجابة صحيحة منك. الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "Sorry, but we didn't receive a correct answer from you.\nPlease send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا ، لكننا لم نتلق إجابة صحيحة منك. الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "600",
                "step" : "reminder40Min"
            },
            "aiLabels" : [
                "WRONG ENTERY"
            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "repeat" : 0,
            "type" : "break",
            "name" : "Dealer",
            "effect" : "Completed - Solution by Bot (Dealer)",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "يرجى الدخول على الرابط التالي لإيجاد اقرب مركز بيع  ويمكنك معرفة الاسعار من خلاله https://bit.ly/2UfH17b"
                },
                {
                    "language" : "en-US",
                    "text" : "Please use the below link to find the closest dealer Location to you and you can contact them for  price inquiry. https://bit.ly/2UiysIF"
                }
            ],
            "next" : "Dealer2",
            "status" : "pending",
            "aiLabels" : [
                "DEALER"
            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "break",
            "name" : "Promotions",
            "effect" : "Completed - Solution by Bot (Promotions)",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "للأجهزة الترفيهية ( الشاشات او اجهزة الصوت ) اضغط على الرابط التالي http://bit.ly/3i2VuhW\nللأجهزة المنزلية ( الغسالات , الثلاجات , الميكروويف , المكنسة ) اضغط على الرابط التالي\nhttp://bit.ly/3bALUBA"
                },
                {
                    "language" : "en-US",
                    "text" : "For Home electronics ( TVs and AVs) press the below link\nhttp://bit.ly/3i2VuhW\n\nFor Home appliances  (Washing Machines , Refrigerates , Microwaves , Vacuum Cleaners)Press the below link\nhttp://bit.ly/3bALUBA"
                }
            ],
            "next" : "Dealer2",
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "Restart",
            "action" : "Restart",
            "cretical" : true,
            "success" : "Options",
            "status" : "pending",
            "aiLabels" : [

            ],
            "fail" : ""
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Dealer2",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر\nالعودة للصفحة الرئيسية ؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر\nالعودة للصفحة الرئيسية ؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "other",
                    "step" : "Dealer2-wrong"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "THREE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-sub"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Dealer2-wrong",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, i couldn't understand your selection, can you please specify it again ?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, i couldn't understand your selection, can you please specify it again ?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "THREE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "600",
                "step" : "reminder40Min"
            },
            "aiLabels" : [
                "WRONG ENTERY"
            ],
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "repeat" : null,
            "type" : "action",
            "name" : "Install",
            "effect" : "",
            "cretical" : false,
            "messages" : [

            ],
            "clarification" : [

            ],
            "expected" : [

            ],
            "status" : "pending",
            "next" : "IsWorking",
            "action" : "Unassign",
            "success" : "IsWorking",
            "fail" : "IsWorking",
            "aiLabels" : [
                "INSTALLATIONS"
            ]
        },
        {
            "repeat" : 0,
            "type" : "break",
            "name" : "Request",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "يرجى اتباع الرابط التالي لتسجيل بلاغ التركيب\nسوف يقوم الفني بالتواصل معك خلال 24 ساعة بعد تسجيل\nالبلاغ لزيارتك وتركيب المنتج, شكرا\nhttps://bit.ly/35gVwOl"
                },
                {
                    "language" : "en-US",
                    "text" : "*Installation Request*\nTo Request for Installation, please follow the below link. After you register your request,\nour technician will call you within 24 hours\nand visit you for your product installation.\nThank you\nhttps://bit.ly/3kiT5PB"
                }
            ],
            "next" : "Request2",
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Request2",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, i couldn't understand your selection, can you please specify it again ?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart"
                },
                {
                    "entity" : "other",
                    "step" : "Request2-wrong"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "THREE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-sub"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "Request2-wrong",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, i couldn't understand your selection, can you please specify it again ?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, i couldn't understand your selection, can you please specify it again ?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "THREE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "600",
                "step" : "reminder40Min"
            },
            "aiLabels" : [
                "WRONG ENTERY"
            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsWorking",
            "action" : "IsWorking",
            "waitForInput" : true,
            "success" : "TransferToAgent",
            "fail" : "OutOfWorking",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "failover",
            "name" : "OutOfWorking",
            "action" : "closeAsRejected",
            "messages" : [
                {
                    "text" : "عذرا .. لقد انتهت مواعيد العمل.\nهذه الخدمة تحتاج التحدث الى موظف خدمة العملاء\nيمكنك ارسال استفسارك وسيتم الرد عليك من خلال موظف خدمة العملاء خلال مواعيد العمل ",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Sorry, we are currently Out of Office\nThis service requires a live agent\nBut do not worry, you can send your inquiry and\nour agent will reply you back within the working hours",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "effect" : "Rejected - Out Of Working Hour Customer",
            "interactiveType" : "message"
        },
        {
            "repeat" : null,
            "optional" : false,
            "type" : "failover",
            "action" : "Unassign",
            "effect" : "routed",
            "name" : "TransferToAgent",
            "messages" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay online as we will connect you to one of our customer support representative.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "120",
                "step" : "reminder2Min"
            },
            "clarification" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "language" : "en-US",
                    "text" : "Please stay online as we will connect you to one of our customer support representative."
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 0,
            "optional" : false,
            "type" : "end",
            "name" : "Closure",
            "messages" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "optional" : false,
            "type" : "reminder",
            "name" : "reminder2Min-new",
            "messages" : [
                {
                    "text" : "شكرا لانتظارك ودمتم سالمين\nبنعتذر جدا لو اتأخرنا عليك في الرد بسبب الضغط على الواتساب بعد وقف استقبال المكالمات مؤقتا لاتخاذ الاجراءات الاحترازية لزيادة انتشار فيروس كورونا.\nبرجاء الانتظار وسوف يقوم موظف خدمة العملاء بالرد عليك بحد اقصى 30 دقيقة.",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Thank you for your patience\nWe apologize for the reply delay due to high traffic on WhatsApp after closing the inbound call for a temporary period due to take safety precautions against Corona virus.\nKindly wait and our agent will reply you back within maximum 30 minutes.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "optional" : false,
            "type" : "reminder",
            "name" : "reminder2Min",
            "messages" : [
                {
                    "text" : "شكرا لانتظارك\nجميع موظفي خدمة العملاء مشغولون الان بالرد على عملاء اخرين ,\nبرجاء الانتظار وسوف يتم تحويلك لموظف خدمة العملاء في اسرع وقت ممكن",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Thank you for your patience\nAll our agents are busy now attending other customers ,\nplease wait and our agent will reply you shortly",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "optional" : false,
            "type" : "message",
            "name" : "reminder30Min",
            "messages" : [
                {
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "برجاء اختيار"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "للشراء وفروع البيع",
                        "لطلب تركيب",
                        "لطلب صيانة",
                        "لمراكز الخدمة",
                        "لمتابعة طلبك",
                        "لشراء الاكسسوارات",
                        "للتحدث لخدمة العملاء"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "We didn`t receive your reply please choose your inquiry from this list",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Please choose"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Where to buy",
                        "Installation Request",
                        "Repair Request",
                        "Service Centers",
                        "Follow Up",
                        "Accessories Purchase",
                        "Chat with a live agent"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "TransferToAgent"
                },
                {
                    "entity" : "LG_EGYPT_WHERE_TO_BUY",
                    "step" : "where_to_buy"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request"
                },
                {
                    "entity" : "LG_EGYPT_SERVICE_CENTER",
                    "step" : "service_center_dwh"
                },
                {
                    "entity" : "LG_EGYPT_ACCESSORIES_PURCHASE",
                    "step" : "accessories_purchase_menu_dwh"
                },
                {
                    "step" : "follow_up_main_dwh",
                    "entity" : "LG_EGYPT_FOLLOW_UP"
                }
            ],
            "expiry" : {
                "seconds" : "60",
                "step" : "reminder40Min"
            },
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "repeat" : 1,
            "optional" : false,
            "type" : "message",
            "name" : "reminder40Min",
            "messages" : [
                {
                    "text" : "هل تفضل التحدث الى احد ممثلي خدمة العملاء ؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                },
                {
                    "text" : "Would you like to talk to a live agent ?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                }
            ],
            "status" : "pending",
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "YES",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "NO",
                    "step" : "NoNeedSupport"
                },
                {
                    "entity" : "TWO",
                    "step" : "NoNeedSupport"
                }
            ],
            "expiry" : {
                "seconds" : "1200",
                "step" : "reminder60Min"
            },
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "reminder60Min",
            "type" : "action",
            "repeat" : 1,
            "action" : "closeMinMenu",
            "aiLabels" : [

            ],
            "effect" : "Rejected -No Response in Main Menu (IB)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "addBandShopLabel",
            "action" : "brandShopLabel",
            "success" : "TRANSFER_TO_AGENT_BRAND",
            "fail" : "TRANSFER_TO_AGENT_BRAND",
            "type" : "action",
            "aiLabels" : [
                "TWO-BRAND-SHOP",
                "BRAND-SHOP",
                "TWO-BRAND-SHOP-R",
                "OBS",
                "Online-Brand-Shop"
            ]
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "نأسف هذه الخدمة تحتاج الى موظف خدمة العملاء يمكنك التواصل معنا للتحدث الى احد ممثلي خدمة العملاء في مواعيد العمل في انتظار تواصلك مرة اخرى , شكرا و سعداء بخدمة حضرتك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry to receive this support, we will need to take assistance from our specialized chat agent. But unfortunately we are out of office. To receive support through Live Agent, please reply back during the working hours Awaiting for your response during working hours. Thank you",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "name" : "Installation-OOO",
            "effect" : "Rejected - Out Of Working Hour Customer",
            "type" : "failover",
            "next" : "closeRejected",
            "clarification" : [
                {
                    "text" : "نأسف هذه الخدمة تحتاج الى موظف خدمة العملاء يمكنك التواصل معنا للتحدث الى احد ممثلي خدمة العملاء في مواعيد العمل في انتظار تواصلك مرة اخرى , شكرا و سعداء بخدمة حضرتك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry to receive this support, we will need to take assistance from our specialized chat agent. But unfortunately we are out of office. To receive support through Live Agent, please reply back during the working hours Awaiting for your response during working hours. Thank you",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "aiLabels" : [
                "WRONG ENTERY"
            ],
            "action" : "closeAsRejected",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "name" : "SVC-OOO",
            "effect" : "Completed - Solution by Bot (SVC)",
            "type" : "message",
            "next" : "Closure",
            "clarification" : [
                {
                    "text" : "Please send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "input" : " dtmf speech",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_ooo_Action"
                }
            ],
            "cretical" : true,
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-OOO"
            },
            "aiLabels" : [
                "SVC"
            ],
            "interactiveType" : "message",
            "field" : "latlang",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "text" : "Please use the below link to find the closest Dealer Location to your location.\nhttps://bit.ly/2UfH17b\nIs there anything else I can assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "text" : "يرجى الدخول على الرابط التالي\nلإيجاد اقرب مركز بيع ويمكنك معرفة الاسعار من خلاله\nhttps://bit.ly/2UfH17b\nاي استفسار اخر",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                }
            ],
            "status" : "pending",
            "clarification" : [
                {
                    "text" : "Please use the below link to find the closest Dealer Location to your location.\nhttps://bit.ly/2UfH17b\nIs there anything else I can assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "text" : "يرجى الدخول على الرابط التالي\nلإيجاد اقرب مركز بيع ويمكنك معرفة الاسعار من خلاله\nhttps://bit.ly/2UfH17b\nاي استفسار اخر",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                }
            ],
            "type" : "message",
            "next" : "Closure",
            "name" : "Dealer-OOO",
            "effect" : "Completed - Solution by Bot (Dealer)",
            "input" : " dtmf speech",
            "expected" : [
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart-OOO"
                },
                {
                    "entity" : "ONE",
                    "step" : "Restart-OOO"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                }
            ],
            "cretical" : true,
            "aiLabels" : [
                "DEALER"
            ],
            "interactiveType" : "message",
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-OOO"
            }
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "Restart-OOO",
            "type" : "action",
            "repeat" : null,
            "action" : "Restart",
            "success" : "Options-OOO",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply\nPlease reply with your selected option",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Please choose"
                    },
                    "options" : [
                        "In-Home Service",
                        "Main Menu",
                        "End Chat",
                        "Chat with live agent"
                    ]
                },
                {
                    "text" : "برجاء اختيار استفسارك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "لم يتم استقبال الرد"
                    },
                    "options" : [
                        "للصيانة المنزلية",
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة",
                        "للتحدث لخدمة العملاء"
                    ]
                }
            ],
            "status" : "pending",
            "name" : "reminder30Min-sub",
            "repeat" : 1,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "We didn`t receive your reply\nPlease reply with your selected option",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Please choose"
                    },
                    "options" : [
                        "In-Home Service",
                        "Main Menu",
                        "End Chat",
                        "Chat with live agent"
                    ]
                },
                {
                    "text" : "برجاء اختيار استفسارك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "لم يتم استقبال الرد"
                    },
                    "options" : [
                        "للصيانة المنزلية",
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة",
                        "للتحدث لخدمة العملاء"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "SVC",
                    "step" : "SVC"
                },
                {
                    "entity" : "TWO",
                    "step" : "Options"
                },
                {
                    "entity" : "THREE",
                    "step" : "Closure"
                },
                {
                    "entity" : "Closure",
                    "step" : "Closure"
                },
                {
                    "entity" : "FOUR",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "ONE",
                    "step" : "SVC"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "600",
                "step" : "reminder40Min-sub"
            },
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe",
                    "language" : "en-US"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر.\nشكرا لك وابقى آمنا",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "reminder40Min-sub",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe",
                    "language" : "en-US"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر.\nشكرا لك وابقى آمنا",
                    "language" : "ar-EG"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "aiLabels" : [

            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Last-Step-Reminder"
                }
            ],
            "cretical" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "reminder45Min-sub",
            "type" : "action",
            "repeat" : 1,
            "action" : "closeSubMenuIVR",
            "aiLabels" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "NoNeedSupport",
            "effect" : "Rejected - No Need Support",
            "action" : "closeAsRejected",
            "type" : "failover",
            "clarification" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "repeat" : 1,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "closeRejected",
            "action" : "closeAsRejected",
            "type" : "failover",
            "clarification" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد",
                    "language" : "ar-EG"
                }
            ],
            "repeat" : 1,
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "لم نتلق أي رد منك منذ فترة.\nإذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه الدردشة.\nلكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك 😊",
                    "language" : "ar-EG"
                },
                {
                    "text" : "It's been a while that we have not received any response from you.\nIf there is no response for 30 minutes, we will end this chat.\nBut you can connect with us again for further query and we will be happy to support you ☺",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "reminder30Min-Eid-sub",
            "repeat" : 1,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "لم نتلق أي رد منك منذ فترة.\nإذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه الدردشة.\nلكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك 😊",
                    "language" : "ar-EG"
                },
                {
                    "text" : "It's been a while that we have not received any response from you.\nIf there is no response for 30 minutes, we will end this chat.\nBut you can connect with us again for further query and we will be happy to support you ☺",
                    "language" : "en-US"
                }
            ],
            "expected" : [
                {
                    "entity" : "THREE-INSTALLATIONS-OOO",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "ONE-SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "DEALER",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder40Min-sub"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "reminder30Min-OOO",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder60MinOOO"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_WHERE_TO_BUY",
                    "step" : "where_to_buy_ooo"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request"
                },
                {
                    "entity" : "LG_EGYPT_CALL_BACK_REQUEST",
                    "step" : "callback_request_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request"
                },
                {
                    "entity" : "LG_EGYPT_FOLLOW_UP",
                    "step" : "follow_up_main_ooo"
                },
                {
                    "entity" : "LG_EGYPT_ACCESSORIES_PURCHASE",
                    "step" : "accessories_purchase_menu_ooo"
                },
                {
                    "entity" : "LG_EGYPT_SERVICE_CENTER",
                    "step" : "service_center_ooo"
                }
            ],
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you",
                    "language" : "en-US"
                }
            ],
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "reminder60MinOOO",
            "type" : "action",
            "action" : "closeOOO",
            "repeat" : 1,
            "aiLabels" : [

            ],
            "effect" : "Rejected -No Response in Main Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Good Morning 🌞\nOur Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agent will assist you.",
                    "language" : "en-US"
                },
                {
                    "text" : "صباح الخير 🌞\nمواعيد عملنا بدأت دلوقتي\nتقدر تبعتلنا استفسارك وهنرد عليك في اسرع وقت ممكن",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "MorningReminder",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder60MinOOO"
            },
            "clarification" : [
                {
                    "text" : "Good Morning 🌞\nOur Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agent will assist you.",
                    "language" : "en-US"
                },
                {
                    "text" : "صباح الخير 🌞\nمواعيد عملنا بدأت دلوقتي\nتقدر تبعتلنا استفسارك وهنرد عليك في اسرع وقت ممكن",
                    "language" : "ar-EG"
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "CheckAgentAvalibility",
            "action" : "checkAgentAvalibility",
            "type" : "action",
            "success" : "AskTransferToSameAgent",
            "fail" : "IsWorking",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [
                {
                    "text" : "Do you want to transfer to the same agent?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "text" : "هل ترغب فى التحدث الى نفس ممثل خدمة العملاء السابق؟\n[1] نعم\n[2] لا",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                }
            ],
            "status" : "pending",
            "name" : "AskTransferToSameAgent",
            "type" : "message",
            "clarification" : [
                {
                    "text" : "Do you want to transfer to the same agent?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "text" : "هل ترغب فى التحدث الى نفس ممثل خدمة العملاء السابق؟\n[1] نعم\n[2] لا",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Check-SameAgent-Online"
                },
                {
                    "entity" : "YES",
                    "step" : "Check-SameAgent-Online"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "NO",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "TWO",
                    "step" : "IsWorking"
                }
            ],
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك الى موظف خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to our customer service representatives.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "AssignToLastAgent",
            "type" : "failover",
            "action" : "assignToLastAgent",
            "clarification" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك الى موظف خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to our customer service representatives.",
                    "language" : "en-US"
                }
            ],
            "effect" : "routed",
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Sign up now & enjoy a 5% coupon discount valid for one month on your first order. ﻿This is a limited offer.\nFor signing up visit us here  https://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "en-US"
                },
                {
                    "text" : "سجل الأن وأستمتع بخصم كوبون 5٪ صالح لمدة شهر واحد على أول طلب شراء. العرض ساري لفترة محدودة.\n\nللتسجيل زور موقعنا \nhttps://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "Promotions-Dealer",
            "type" : "break",
            "repeat" : 0,
            "next" : "Dealer",
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "messages" : [
                {
                    "text" : "Sign up now & enjoy a 5% coupon discount valid for one month on your first order. ﻿This is a limited offer.\nFor signing up visit us here  https://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "en-US"
                },
                {
                    "text" : "سجل الأن وأستمتع بخصم كوبون 5٪ صالح لمدة شهر واحد على أول طلب شراء. العرض ساري لفترة محدودة.\n\nللتسجيل زور موقعنا \nhttps://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "Promotions-addBandShopLabel",
            "type" : "break",
            "repeat" : 0,
            "next" : "addBandShopLabel",
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Sign up now & enjoy a 5% coupon discount valid for one month on your first order. ﻿This is a limited offer.\nFor signing up visit us here  https://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "en-US"
                },
                {
                    "text" : "سجل الأن وأستمتع بخصم كوبون 5٪ صالح لمدة شهر واحد على أول طلب شراء. العرض ساري لفترة محدودة.\n\nللتسجيل زور موقعنا \nhttps://sso.lg.com/oauth/page/signup?authorizeKey=c7b692ee-a07f-49d7-b2c0-1850563627cd",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "Promotions-Dealer-OOO",
            "type" : "break",
            "repeat" : 0,
            "next" : "Dealer-OOO",
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "name" : "Check-SameAgent-Online",
            "type" : "action",
            "action" : "checkAgentAvalibility",
            "success" : "IsWorkingassignToLastAgent-2",
            "fail" : "IsWorkingSameAgent-Not-Online",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsWorkingassignToLastAgent-2",
            "action" : "IsWorking",
            "waitForInput" : true,
            "success" : "assignToLastAgent-2",
            "fail" : "OutOfWorking",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "repeat" : 0,
            "type" : "action",
            "name" : "IsWorkingSameAgent-Not-Online",
            "action" : "IsWorking",
            "waitForInput" : true,
            "success" : "SameAgent-Not-Online",
            "fail" : "OutOfWorking",
            "status" : "pending",
            "aiLabels" : [

            ]
        },
        {
            "messages" : [
                {
                    "text" : "نعتذر لعدم وجود إمكانية لتحويل المحادثة إلى نفس الموظف لعدم تواجده، سيتم تحويل المحادثة إلى موظف اَخر للرد على استفسارك.",
                    "language" : "ar-EG"
                },
                {
                    "text" : "We are sorry the same agent is not available right now, we are going to transfer you to another agent to assist you.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "SameAgent-Not-Online",
            "effect" : "routed",
            "type" : "failover",
            "action" : "Unassign",
            "expiry" : {
                "seconds" : "120",
                "step" : "reminder2Min"
            },
            "clarification" : [
                {
                    "text" : "نعتذر لعدم وجود إمكانية لتحويل المحادثة إلى نفس الموظف لعدم تواجده، سيتم تحويل المحادثة إلى موظف اَخر للرد على استفسارك.",
                    "language" : "ar-EG"
                },
                {
                    "text" : "We are sorry the same agent is not available right now, we are going to transfer you to another agent to assist you.",
                    "language" : "en-US"
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك الى موظف خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to our customer service representatives.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "assignToLastAgent-2",
            "effect" : "routed",
            "type" : "failover",
            "action" : "assignToLastAgent",
            "clarification" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك الى موظف خدمة العملاء",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to our customer service representatives.",
                    "language" : "en-US"
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "status" : "pending",
            "name" : "legalScript-Revisit-3",
            "type" : "message",
            "field" : "legalScript",
            "waitTime" : 0,
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "step" : "AskTransferToSameAgent",
                    "entity" : "Agree"
                },
                {
                    "entity" : "Disagree",
                    "step" : "AskTransferToSameAgent"
                },
                {
                    "entity" : "other",
                    "step" : "AskTransferToSameAgent"
                }
            ],
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                },
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                }
            ],
            "status" : "pending",
            "name" : "legalScript-Revisit-3-Not-Same",
            "type" : "message",
            "field" : "legalScript",
            "waitTime" : 0,
            "repeat" : 0,
            "clarification" : [
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                },
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "TransferToAgent"
                },
                {
                    "entity" : "Disagree",
                    "step" : "TransferToAgent"
                },
                {
                    "entity" : "other",
                    "step" : "TransferToAgent"
                }
            ],
            "cretical" : true,
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء .",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to one of our customer service representative",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "name" : "BREAK_WAIT_UNASSIGN",
            "type" : "break",
            "next" : "Free_AC_protective_service",
            "clarification" : [
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء .",
                    "language" : "ar-EG"
                },
                {
                    "text" : "Please stay on the line, your call is being connected to one of our customer service representative",
                    "language" : "en-US"
                }
            ],
            "aiLabels" : [
                "FREE AC PROTECTIVE SERVICE"
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "To register a free visit order for protective maintenance of your AC \nKindly provide us with the below data and we will respond you as soon as possible \n1- The model number of your AC from the indoor unit\n The model Number starts with (GS,KS,S4 ) or take picture then send it to us .\n2- Your full name \n3- Your Mobile number and additional one if you have \n4- The address in details (City , building number , street name , floor and flat number )\n5- The visit will be within 48 hours so do you prefer a specific time?\nThe visit Schedule from 10 AM to 5 PM  from Saturday to Thursday",
                    "language" : "en-US"
                },
                {
                    "text" : "يرجى ارسال البيانات التالية الى ان يتم الرد عليكم لسرعة تسجيل بلاغ الصيانه الوقائية المجانية :\n\n1- يرجى ارسال رقم الموديل الموجود على الوحدة الداخلية \nمثال ( رقم الموديل يبدا بحروف GS,KS,S4 ) يرجى ارساله كاملا او تصويره وارسالة.\n2- الاسم بالكامل \n3- رقم موبايل اساسى بالاضافة الى رقم اضافي ان وجد .\n4- المنطقة السكنية والعنوان بالتفصيل شامل رقم العقار واسم الشارع والدور ورقم الشقة.\n5- تتم الزيارة خلال 48 ساعه , يرجى توضيح اذا كان لديكم موعد مفضل للزيارة.\nمواعيد الزيارة من السبت الى الخميس من 10 ص الى 5 م .",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "name" : "Free_AC_protective_service",
            "type" : "failover",
            "clarification" : [
                {
                    "text" : "To register a free visit order for protective maintenance of your AC \nKindly provide us with the below data and we will respond you as soon as possible \n1- The model number of your AC from the indoor unit\n The model Number starts with (GS,KS,S4 ) or take picture then send it to us .\n2- Your full name \n3- Your Mobile number and additional one if you have \n4- The address in details (City , building number , street name , floor and flat number )\n5- The visit will be within 48 hours so do you prefer a specific time?\nThe visit Schedule from 10 AM to 5 PM  from Saturday to Thursday",
                    "language" : "en-US"
                },
                {
                    "text" : "يرجى ارسال البيانات التالية الى ان يتم الرد عليكم لسرعة تسجيل بلاغ الصيانه الوقائية المجانية :\n\n1- يرجى ارسال رقم الموديل الموجود على الوحدة الداخلية \nمثال ( رقم الموديل يبدا بحروف GS,KS,S4 ) يرجى ارساله كاملا او تصويره وارسالة.\n2- الاسم بالكامل \n3- رقم موبايل اساسى بالاضافة الى رقم اضافي ان وجد .\n4- المنطقة السكنية والعنوان بالتفصيل شامل رقم العقار واسم الشارع والدور ورقم الشقة.\n5- تتم الزيارة خلال 48 ساعه , يرجى توضيح اذا كان لديكم موعد مفضل للزيارة.\nمواعيد الزيارة من السبت الى الخميس من 10 ص الى 5 م .",
                    "language" : "ar-EG"
                }
            ],
            "aiLabels" : [

            ],
            "repeat" : null,
            "action" : "Unassign",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Dear $1, This is a follow up regarding your $2 inquiry, for more details please respond to this message."
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "follow_up_after_24_hrs_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Thank you for calling LG Electronics. You can find our service center details as below $1 Check more Info on https://www.lg.com/ae/support/repair-warranty/locate-repair-center For future assistance please feel free to reach us on the same WhatsApp number."
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "center_location_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "\"شكرا لاتصالك بشركة ال جي للالكترونيات , لبيانات مركز الصيانة يمكنك الدخول على الرابط التالي $1  لتفاصيل اكثر عن جميع مراكز الصيانة يمكنك الدخول على الرابط التالي   https://www.lg.com/eg_ar/support/repair-warranty/locate-repair-center  لمزيد من المعلومات يرجى التواصل معنا واتس اب مره اخرى من خلال نفس الرقم\""
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "center_location_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for calling LG Electronics. For further explanation, kindly click this link $1 for the video on how to resolve the issue. For future assistance please feel free to reach us on the same WhatsApp number. Thank you!",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "explanation_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , يرجى الاطلاع على الفيديو في الرابط التالي واتباع خطوات الدعم الفني $1 لمزيد من المتابعه يرجى التواصل معنا واتس اب مره اخرى من خلال نفس الرقم",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "explanation_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for calling LG Electronics. Further to our phone conversation, kindly update us with your $1, model, serial number and the warranty details in order to confirm and register your service request. For future assistance please feel free to reach us on the same WhatsApp number.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "model_number_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , بناء على اتصالك بالخط الساخن يرجى ارسال بياناتك $1 وذلك لتسجيل البلاغ,   لمزيد من المتابعه يرجى التواصل معنا واتس اب مره اخرى من خلال نفس الرقم"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "model_number_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Dear customer, kindly accept our sincere apologies for the visit delay, Regarding the visit it will be done $1. For future assistance please feel free to reach us on the same WhatsApp number. Thank you!",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "visit_delay_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "عميلنا العزيز , نقدم المزيد من الاعتذار بخصوص تأخير الزيارة , تم التواصل مع مركز الخدمة و سوف تتم الزياره $1  ,   لمزيد من المتابعة يرجى التواصل معنا وتساب مره اخرى من خلال نفس الرقم",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "visit_delay_arb",
            "type" : "message",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Dear customer, kindly accept our sincere apologies for the part delay  , regarding the spare part it will be available$1. For future assistance please feel free to reach us on the same WhatsApp number. Thank you!",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "parts_delay_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "عميلنا العزيز , نقدم المزيد من الاعتذار بخصوص تأخير قطعة الغيار , سوف تتوفر قطعة الغيار $1  ,    لمزيد من المتابعة يرجى التواصل معنا وتساب مره اخرى من خلال نفس الرقم",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "parts_delay_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for calling LG Electronics. Further to our phone conversation, regarding your inquiry about {{1}}, kindly be informed that the cost is {{2}}, Kindly contact us on the same WhatsApp number.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "cost_msg_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "عميلنا العزيز , شكرا لاتصالك بشركة ال جي للالكترونيات, بخصوص استفساركم عن $1 يرجى العلم ان تكلفة القطعة $2 , لمزيد من المتابعة يرجى التواصل من خلال نفس الرقم على الوتساب$3",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "cost_msg_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "عميلنا العزيز , مازلنا في انتظار ارسال البيانات لتسجيل البلاغ , لمزيد من المعلومات يرجى التواصل معنا على الوتساب مره اخرى من خلال نفس الرقم",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "model_number_followup_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Dear customer, we are still waiting for the product’s details to register the service request. For future assistance please feel free to reach us on the same WhatsApp number. Thank you!",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "model_number_followup_eng",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Good Morning !! Our Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agents will assist you.",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "gm_01",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "وكلاؤنا متاحون الآن. إذا كنت بحاجة إلى مزيد من الدعم من ممثل خدمه العملاء ، يرجى الرد على هذه الرسالة وسيساعدك أحد ممثلي خدمه العملاء  المتخصصين.",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "gm_ar_01",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "في انتظار الرد\nفي حالة عدم تلقي اي رد من خلالكم بعد 5 دقائق اخرى سوف يتم انهاء المحادثة تلقائيا ولكن سنكون سعداء بتواصلكم معنا مجددا😊",
                    "language" : "ar-EG"
                },
                {
                    "text" : "We haven't heard from you in a while. To keep your chat session active, please respond to this message and let us know you are still there\n                         \nNote: If there is no response for another 5 minutes, then we will end this chat. But you can connect with us anytime for further query and we will be happy to support you 😊",
                    "language" : "en-US"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "live-reminder",
            "type" : "message",
            "repeat" : 0,
            "clarification" : [
                {
                    "text" : "We haven't heard from you in a while. To keep your chat session active, please respond to this message and let us know you are still there\n                         \nNote: If there is no response for another 5 minutes, then we will end this chat. But you can connect with us anytime for further query and we will be happy to support you 😊",
                    "language" : "en-US"
                },
                {
                    "text" : "في انتظار الرد\nفي حالة عدم تلقي اي رد من خلالكم بعد 5 دقائق اخرى سوف يتم انهاء المحادثة تلقائيا ولكن سنكون سعداء بتواصلكم معنا مجددا😊",
                    "language" : "ar-EG"
                }
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Please reply with your selected option",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Please choose"
                    },
                    "options" : [
                        "Main Menu",
                        "End Chat",
                        "Chat with live agent"
                    ]
                },
                {
                    "text" : "يرجى الرد بالاخيار الذي حددته ",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "برجاء اختيار"
                    },
                    "options" : [
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة",
                        "للتحدث لخدمة العملاء"
                    ]
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Last-Step-Reminder",
            "type" : "message",
            "clarification" : [
                {
                    "text" : "Please reply with your selected option",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Please choose"
                    },
                    "options" : [
                        "Main Menu",
                        "End Chat",
                        "Chat with live agent"
                    ]
                },
                {
                    "text" : "يرجى الرد بالاخيار الذي حددته ",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "برجاء اختيار"
                    },
                    "options" : [
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة",
                        "للتحدث لخدمة العملاء"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Options"
                },
                {
                    "entity" : "MENU",
                    "step" : "Options"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                },
                {
                    "entity" : "Closure",
                    "step" : "Closure"
                },
                {
                    "entity" : "THREE",
                    "step" : "TransferToAgent"
                },
                {
                    "entity" : "AGENT",
                    "step" : "TransferToAgent"
                },
                {
                    "entity" : "other",
                    "step" : "TransferToAgent"
                }
            ],
            "cretical" : true,
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "effect" : "Rejected - No Response in Main Menu (IB)",
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "MORE-30-DAYS-IS-WORKING",
            "action" : "IsWorking",
            "type" : "action",
            "success" : "IsReturning",
            "fail" : "MORE-30-DAYS-OOO"
        },
        {
            "messages" : [
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nرمضان كريم 🌙\nعذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء )\nمواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا\nوقت الافطار بيتم وقف الخدمة من الساعة 05:30 مساءا الى الساعة 7:00 مساءا \nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت\nشكرا وسعداء بخدمة حضرتك\n\n قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Welcome to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 5:30 PM ~ 7:00 PMT , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "MORE-30-DAYS-OOO",
            "clarification" : [
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر رمضان كريم 🌙 عذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء ) مواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا وقت الافطار بيتم وقف الخدمة من الساعة 05:30 مساءا الى الساعة 7:00 مساءا يمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت شكرا وسعداء بخدمة حضرتك قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Welcome to LG Electronics Egypt Ramadan Kareem 🕌 Sorry but currently we are out of office hours. ( To speak to a live agent) Ramadan Working hours: All over the week from 09:00 AM~ 09:00 PM Iftar cut off time from 5:30 PM ~ 7:00 PMT , We will contact you back after Iftar time You can receive support through our Chatbot on the below categories Thank you and happy to serve you any time. We may use your data for marketing purposes and for customer survey Please send the number for your approval:",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "type" : "message",
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Options-OOO"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "300",
                "step" : "MORE-30-DAYS-OOO-REMINDER"
            },
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "MORE-30-DAYS-OOO-Iftar",
            "clarification" : [
                {
                    "text" : "قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "We may use your data for marketing purposes and for customer survey Please send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "type" : "message",
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Options-OOO"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "300",
                "step" : "MORE-30-DAYS-OOO-REMINDER"
            },
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Welcome to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 06:00 PM ~ 7:30 PM , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "( 1 ) Agree",
                        "( 2 ) Disagree"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nرمضان كريم 🌙\nعذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء )\nمواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا\nوقت الافطار بيتم وقف الخدمة من الساعة 06:00 مساءا الى الساعة 07:30 مساءا \nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت\nشكرا وسعداء بخدمة حضرتك\n\n قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق ( 1 )",
                        "غير موافق ( 2 )"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "MORE-30-DAYS-OOO-REMINDER",
            "type" : "message",
            "clarification" : [
                {
                    "text" : "Welcome to LG Electronics Egypt \nRamadan Kareem 🕌\nSorry but currently we are out of office hours. ( To speak to a live agent) \nRamadan Working hours: All over the week from 09:00 AM~ 09:00 PM\nIftar cut off time from 06:00 PM ~ 7:30 PM , We will contact you back after Iftar time\nYou can receive support through our Chatbot on the below categories\nThank you and happy to serve you any time.\n\nWe may use your data for marketing purposes and for customer survey \nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "( 1 ) Agree",
                        "( 2 ) Disagree"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nرمضان كريم 🌙\nعذراُ .. لقد انتهت مواعيد العمل ( للتحدث الى ممثل خدمة العملاء )\nمواعيد العمل في رمضان: طول ايام الاسبوع من الساعة 9 صباحا للساعة 9 مساءا\nوقت الافطار بيتم وقف الخدمة من الساعة 06:00 مساءا الى الساعة 07:30 مساءا \nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت\nشكرا وسعداء بخدمة حضرتك\n\n قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي يرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق ( 1 )",
                        "غير موافق ( 2 )"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "repeat" : 1,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Options-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Options-OOO"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "Options-OOO"
            },
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "مرحبًا بك فى شركه ال جى للإلكترونيات مصر يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي \n\nيرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "Welcome to LG Electronics Egypt, I am your virtual smart assistant Kindly note that this conversation will be recorded for training and quality purposes. We may use your data for marketing purposes and for customer survey \n\nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "MORE-30-DAYS-REMINDER",
            "type" : "message",
            "clarification" : [
                {
                    "text" : "مرحبًا بك فى شركه ال جى للإلكترونيات مصر يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة قد يتم استخدام بياناتك لاغراض التسويق اواستطلاع الرأي \n\nيرجى ارسال رقم للموافقة:",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "موافق",
                        "غير موافق"
                    ]
                },
                {
                    "text" : "Welcome to LG Electronics Egypt, I am your virtual smart assistant Kindly note that this conversation will be recorded for training and quality purposes. We may use your data for marketing purposes and for customer survey \n\nPlease send the number for your approval",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Agree",
                        "Disagree"
                    ]
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "300",
                "step" : "Start"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "Agree",
                    "step" : "Start"
                },
                {
                    "entity" : "Disagree",
                    "step" : "Start"
                },
                {
                    "entity" : "other",
                    "step" : "Start"
                }
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day",
                    "language" : "en-US"
                },
                {
                    "text" : "شكرا لاتصالك بشركه ال جي للالكترونيات نتمنى لك يوما سعيدا",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Close SVC",
            "effect" : "Completed - Solution by Bot (SVC)",
            "type" : "end",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Welcome to LG Electronics Egypt, Happy Feast\n\nYou can receive support through our Smart Virtual Assistance on the below categories \u000bPlease note that this conversation will be recorded for training and quality purposes. And we may use your data for marketing purposes in future. \nTo speak to a live agent kindly contact us from third day of Eid from 9 AM till 6 PM",
                    "language" : "en-US"
                },
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nكل سنة وانت طيب و عيد سعيد \n\nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال الذكاء الاصطناعي في اي وقت \nيرجى العلم انه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة وقد يتم استخدام بياناتك لاغراض التسويق\nللتحدث لموظف خدمة العملاء تقدر تتواصل معنا  من تالت يوم العيد الساعة 9 صباحا للساعة 6 مساءا",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Holiday welcome message",
            "type" : "break",
            "repeat" : null,
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "Welcome to LG Electronics Egypt, Happy Feast\n\nYou can receive support through our Smart Virtual Assistance on the below categories \u000bPlease note that this conversation will be recorded for training and quality purposes. And we may use your data for marketing purposes in future. \nTo speak to a live agent kindly contact us from third day of Eid from 9 AM till 6 PM"
                },
                {
                    "text" : "مرحبا بك في شركة ال جي للالكترونيات مصر\nكل سنة وانت طيب و عيد سعيد \n\nيمكنك استخدام بعض الاختيارات من القائمة التالية من خلال الذكاء الاصطناعي في اي وقت \nيرجى العلم انه سيتم تسجيل هذه المحادثة لأغراض التدريب وتحسين الجودة وقد يتم استخدام بياناتك لاغراض التسويق\nللتحدث لموظف خدمة العملاء تقدر تتواصل معنا  من تالت يوم العيد الساعة 9 صباحا للساعة 6 مساءا",
                    "language" : "ar-EG"
                }
            ],
            "next" : "Options Holiday",
            "allowLanguageSwitch" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "برجاء اختيار استفسارك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "options" : [
                        "للصيانة",
                        "للشراء اون لاين",
                        "للأسعار وفروع البيع",
                        "للتركيبات"
                    ]
                },
                {
                    "text" : "Please choose your inquiry",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "options" : [
                        "Service Centre",
                        "Online Brand shop Query",
                        "Dealer & Prices",
                        "Installation Request"
                    ]
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Options Holiday",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder30Min-OOO"
            },
            "cretical" : true,
            "allowLanguageSwitch" : true,
            "clarification" : [
                {
                    "text" : "برجاء اختيار استفسارك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "button" : "اختر",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "القائمة الرئيسية"
                    },
                    "options" : [
                        "للصيانة",
                        "للشراء اون لاين",
                        "للأسعار وفروع البيع",
                        "للتركيبات"
                    ]
                },
                {
                    "text" : "Please choose your inquiry",
                    "language" : "en-US",
                    "type" : "interactive",
                    "button" : "Choose",
                    "contentType" : "list",
                    "header" : {
                        "type" : "text",
                        "text" : "Main Menu"
                    },
                    "options" : [
                        "Service Centre",
                        "Online Brand shop Query",
                        "Dealer & Prices",
                        "Installation Request"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "1 Service Centre Location"
                },
                {
                    "entity" : "ONE-SVC",
                    "step" : "1 Service Centre Location"
                },
                {
                    "entity" : "SVC",
                    "step" : "1 Service Centre Location"
                },
                {
                    "entity" : "TWO",
                    "step" : "( 2 ) Online Brand Shop Query"
                },
                {
                    "entity" : "TWO-BRAND-SHOP",
                    "step" : "( 2 ) Online Brand Shop Query"
                },
                {
                    "entity" : "BRAND-SHOP",
                    "step" : "( 2 ) Online Brand Shop Query"
                },
                {
                    "entity" : "THREE",
                    "step" : "( 3 ) Dealer information & Prices"
                },
                {
                    "entity" : "DEALER",
                    "step" : "( 3 ) Dealer information & Prices"
                },
                {
                    "entity" : "THREE-DEALER",
                    "step" : "( 3 ) Dealer information & Prices"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "( 4 ) Installation Request"
                },
                {
                    "entity" : "FOUR",
                    "step" : "( 4 ) Installation Request"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                }
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "Service Center In-Home Service Policy If you have any of below LG product, you are eligible to avail In-Home Services. Which means LG Engineer will visit your place and repair the product Products eligible for In-Home Service: TV Above 32 Inch, Refrigerator, Washing Machine, Dryer, Air-conditioner, Dishwasher, Airpurifier .\nSorry service centers are closed during the three days of Eid you can contact them after Eid holiday For more support.\nPlease send your location to send to you the nearest branches to you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "للصيانة المنزلية سياسة خدمة الصيانة المنزلية اذا كان لديك احد المنتجات التالية, فيمكنك طلب خدمة زيارة منزلية من خلال فني الصيانة المنتجات المتاح لها خدمة الصيانة المنزلية :شاشة اكبر من 32 بوصة, ثلاجة ,غسالة ملابس, غسالة اطباق ,مجفف ,تكييف , منقي الهواء، نعتذر مراكز الخدمة مغلقة خلال 3 ايام العيد.\nالرجاء ارسال موقعك لإرسال اقرب الفروع لك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "aiLabels" : [
                "SVC"
            ],
            "name" : "1 Service Centre Location",
            "clarification" : [
                {
                    "text" : "Service Center In-Home Service Policy If you have any of below LG product, you are eligible to avail In-Home Services. Which means LG Engineer will visit your place and repair the product Products eligible for In-Home Service: TV Above 32 Inch, Refrigerator, Washing Machine, Dryer, Air-conditioner, Dishwasher, Airpurifier .\nSorry service centers are closed during the three days of Eid you can contact them after Eid holiday For more support.\nPlease send your location to send to you the nearest branches to you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "للصيانة المنزلية سياسة خدمة الصيانة المنزلية اذا كان لديك احد المنتجات التالية, فيمكنك طلب خدمة زيارة منزلية من خلال فني الصيانة المنتجات المتاح لها خدمة الصيانة المنزلية :شاشة اكبر من 32 بوصة, ثلاجة ,غسالة ملابس, غسالة اطباق ,مجفف ,تكييف , منقي الهواء، نعتذر مراكز الخدمة مغلقة خلال 3 ايام العيد.\nالرجاء ارسال موقعك لإرسال اقرب الفروع لك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "allowLanguageSwitch" : true,
            "type" : "message",
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_ooo_30min_reminder"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                }
            ],
            "interactiveType" : "message",
            "field" : "latlang",
            "effect" : "Completed - Solution by Bot (SVC)",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "text" : "Online Purchase from LG website https://www.lg.com/eg_en",
                    "language" : "en-US"
                },
                {
                    "text" : "خدمة الشراء عن طريق الموقع و من خلال الرابط الاتى https://www.lg.com/eg_er",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "( 2 ) Online Brand Shop Query",
            "type" : "break",
            "clarification" : [
                {
                    "text" : "Online Purchase from LG website https://www.lg.com/eg_en",
                    "language" : "en-US"
                },
                {
                    "text" : "خدمة الشراء عن طريق الموقع و من خلال الرابط الاتى https://www.lg.com/eg_er",
                    "language" : "ar-EG"
                }
            ],
            "allowLanguageSwitch" : true,
            "expiry" : {
                "step" : "reminder30Min-OOO",
                "seconds" : ""
            },
            "next" : "Section 2 Holiday",
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Brand Shop)"
        },
        {
            "messages" : [
                {
                    "text" : "Please use the below link to find the closest Dealer Location to your location. https://bit.ly/2UfH17b",
                    "language" : "en-US"
                },
                {
                    "text" : "يرجى الدخول على الرابط التالي لإيجاد اقرب مركز بيع ويمكنك معرفة الاسعار من خلاله \n\n https://bit.ly/2UfH17b",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "clarification" : [

            ],
            "cretical" : true,
            "allowLanguageSwitch" : true,
            "type" : "break",
            "expiry" : {
                "seconds" : ""
            },
            "name" : "( 3 ) Dealer information & Prices",
            "next" : "Section 2 Holiday",
            "interactiveType" : "message",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "messages" : [
                {
                    "text" : "You can register your installation request through our website https://www.lg.com/eg_en/support/repair-warranty/request-installation",
                    "language" : "en-US"
                },
                {
                    "text" : "تقدر تسجل بلاغ تركيب من خلال الموقع عن طريق الرابط التالي\nhttps://www.lg.com/eg_ar/support/repair-warranty/request-installation",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "( 4 ) Installation Request",
            "type" : "break",
            "repeat" : 1,
            "expiry" : {
                "seconds" : ""
            },
            "clarification" : [
                {
                    "text" : "You can register your installation request through our website https://www.lg.com/eg_en/support/repair-warranty/request-installation",
                    "language" : "en-US"
                },
                {
                    "text" : "تقدر تسجل بلاغ تركيب من خلال الموقع عن طريق الرابط التالي\nhttps://www.lg.com/eg_ar/support/repair-warranty/request-installation",
                    "language" : "ar-EG"
                }
            ],
            "cretical" : true,
            "allowLanguageSwitch" : true,
            "next" : "Section 2 Holiday",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "For more support, please choose your inquiry",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Main Menu",
                        "End Chat"
                    ]
                },
                {
                    "text" : "برجاء إختيار إستفسارك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة"
                    ]
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Section 2 Holiday",
            "type" : "message",
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder30Min-OOO"
            },
            "cretical" : true,
            "allowLanguageSwitch" : true,
            "clarification" : [
                {
                    "text" : "For more support, please choose your inquiry",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Main Menu",
                        "End Chat"
                    ]
                },
                {
                    "language" : "ar-EG",
                    "text" : "برجاء إختيار إستفسارك",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "القائمة الرئيسية",
                        "لإنهاء المحادثة"
                    ]
                }
            ],
            "repeat" : 1,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                },
                {
                    "entity" : "Closure",
                    "step" : "Closure"
                },
                {
                    "entity" : "AGENT",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "ONE",
                    "step" : "Restart Holiday"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart Holiday"
                },
                {
                    "entity" : "ONE 1",
                    "step" : "Restart Holiday"
                }
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Restart Holiday",
            "type" : "action",
            "action" : "Restart",
            "fail" : "Options Holiday",
            "success" : "Options Holiday",
            "repeat" : 0,
            "waitTime" : 0
        },
        {
            "messages" : [
                {
                    "text" : "نأسف لعدم تمكننا من الرد على استفسارك في الوقت المحدد بسبب $1 ، يرجى إعلامنا بالمزيد حول $2",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "out_of_working_hrs_over_24_hrs_arb",
            "type" : "message",
            "template" : true,
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "نعتذر لتأخير الرد بخصوص استفسارك , هل يمكننا المتابعة معك حاليا بخصوص $1",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "type" : "message",
            "template" : true,
            "name" : "follow_up_after_24_hrs_arb_",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : ".",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Pending Mgmnt",
            "type" : "message",
            "expiry" : {
                "seconds" : "30",
                "step" : "Pending Mgmnt Close"
            },
            "cretical" : true,
            "clarification" : [
                {
                    "text" : ".",
                    "language" : "ar-EG"
                }
            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Pending Mgmnt Close",
            "action" : "closeAsCompleted",
            "effect" : "Closed - Pending Mgmnt",
            "type" : "failover",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : ".",
                    "language" : "ar-EG"
                }
            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Installation App",
            "clarification" : [
                {
                    "text" : ".",
                    "language" : "ar-EG"
                }
            ],
            "type" : "message",
            "expiry" : {
                "seconds" : "30",
                "step" : "Installation App Close"
            },
            "interactiveType" : "message"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "name" : "Installation App Close",
            "action" : "closeAsCompleted",
            "effect" : "Closed- Installation App",
            "type" : "failover",
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Thank you for contacting LG Electronics Egypt, I am your virtual smart assistant. Kindly note that this conversation will be recorded for training and quality purposes. We may use your data to contact you in the future. Please choose the number for your inquiry\n ( 1 ) Service Centre Location\n ( 2 ) Online Brand shop Query\n ( 3 ) Dealer information & Prices \n( 4 ) Installation Request\n( 5 )  Repair Follow-Up\n ( 6 ) Chat with a live agent",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "welcome_new_wh_en_us1",
            "expected" : [
                {
                    "entity" : "SVC",
                    "step" : "SVC"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "Install"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "DEALER",
                    "step" : "Dealer"
                },
                {
                    "entity" : "BRAND-SHOP",
                    "step" : "addBandShopLabel"
                },
                {
                    "entity" : "ONE-SVC-R",
                    "step" : "SVC"
                },
                {
                    "entity" : "TWO-BRAND-SHOP",
                    "step" : "addBandShopLabel"
                },
                {
                    "entity" : "THREE-DEALER-R",
                    "step" : "Dealer"
                },
                {
                    "entity" : "FOUR-INSTALLATIONS-R",
                    "step" : "Install"
                },
                {
                    "entity" : "FIVE-LIVE-AGENT-R",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "other",
                    "step" : "Options-wrong"
                }
            ],
            "template" : true,
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "Thank you for contacting LG Electronics Egypt, I am your virtual smart assistant. Kindly note that this conversation will be recorded for training and quality purposes. We may use your data to contact you in the future. Please choose the number for your inquiry\n ( 1 ) Service Centre Location\n ( 2 ) Online Brand shop Query\n ( 3 ) Dealer information & Prices \n( 4 ) Installation Request\n( 5 )  Repair Follow-Up\n ( 6 ) Chat with a live agent",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "شكرا لاتصالك بشركة ال جىللإلكترونيات مصر, يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريبوتحسين الجودة وقد يتم استخدام بياناتك للتواصل معك لاحقا برجاء اختيار الرقم الخاص باستفسارك\n( 1 ) للصيانة \n( 2 ) للشراء اون لاين\n( 3 ) للأسعار وفروع البيع\n( 4 ) للتركيبات \nمتابعه طلب الصيانه ( 5 )\n للتحدث الى موظف خدمة العملاء( 6 )",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "welcome_new_wh_ar_eg1",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Options-wrong"
                },
                {
                    "entity" : "SVC",
                    "step" : "SVC"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "Install"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "DEALER",
                    "step" : "Dealer"
                },
                {
                    "entity" : "BRAND-SHOP",
                    "step" : "addBandShopLabel"
                },
                {
                    "entity" : "ONE-SVC-R",
                    "step" : "SVC"
                },
                {
                    "entity" : "TWO-BRAND-SHOP-R",
                    "step" : "addBandShopLabel"
                },
                {
                    "entity" : "THREE-DEALER-R",
                    "step" : "Dealer"
                },
                {
                    "entity" : "FOUR-INSTALLATIONS-R",
                    "step" : "Install"
                },
                {
                    "entity" : "FIVE-LIVE-AGENT-R",
                    "step" : "IsWorking"
                }
            ],
            "clarification" : [
                {
                    "text" : "شكرا لاتصالك بشركة ال جىللإلكترونيات مصر, يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريبوتحسين الجودة وقد يتم استخدام بياناتك للتواصل معك لاحقا برجاء اختيار الرقم الخاص باستفسارك\n( 1 ) للصيانة \n( 2 ) للشراء اون لاين\n( 3 ) للأسعار وفروع البيع\n( 4 ) للتركيبات \nمتابعه طلب الصيانه ( 5 )\n للتحدث الى موظف خدمة العملاء( 6 )",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "template" : true
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Thank you for contacting LG Electronics Egypt, I am your virtual smart assistant. Kindly note that this conversation will be recorded for training and quality purposes. We may use your data to contact you in the future. Please choose the number for your inquiry\n ( 1 ) Service Centre Location\n ( 2 ) Online Brand shop Query\n ( 3 ) Dealer information & Prices \n( 4 ) Installation Request\n( 5 )  Repair Follow-Up",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "welcome_new_wh_en_us1oow",
            "type" : "message",
            "template" : true,
            "expected" : [
                {
                    "entity" : "THREE-INSTALLATIONS-OOO",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "ONE-SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "DEALER",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                }
            ],
            "clarification" : [
                {
                    "text" : "Thank you for contacting LG Electronics Egypt, I am your virtual smart assistant. Kindly note that this conversation will be recorded for training and quality purposes. We may use your data to contact you in the future. Please choose the number for your inquiry\n ( 1 ) Service Centre Location\n ( 2 ) Online Brand shop Query\n ( 3 ) Dealer information & Prices \n( 4 ) Installation Request\n( 5 )  Repair Follow-Up",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "شكرا لاتصالك بشركة ال جىللإلكترونيات مصر, يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريبوتحسين الجودة وقد يتم استخدام بياناتك للتواصل معك لاحقا برجاء اختيار الرقم الخاص باستفسارك\n( 1 ) للصيانة \n( 2 ) للشراء اون لاين\n( 3 ) للأسعار وفروع البيع\n( 4 ) للتركيبات \nمتابعه طلب الصيانه ( 5 )",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "welcome_new_wh_ar_eg1oow",
            "type" : "message",
            "template" : true,
            "expected" : [
                {
                    "entity" : "THREE-INSTALLATIONS-OOO",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "INSTALLATION",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "ONE-SVC",
                    "step" : "SVC-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "DEALER",
                    "step" : "Dealer-OOO"
                },
                {
                    "entity" : "TWO-DEALER-OOO",
                    "step" : "Dealer-OOO"
                }
            ],
            "clarification" : [
                {
                    "text" : "شكرا لاتصالك بشركة ال جىللإلكترونيات مصر, يتم الرد من خلال وحدة الذكاء الاصطناعي يرجى ملاحظة أنه سيتم تسجيل هذه المحادثة لأغراض التدريبوتحسين الجودة وقد يتم استخدام بياناتك للتواصل معك لاحقا برجاء اختيار الرقم الخاص باستفسارك\n( 1 ) للصيانة \n( 2 ) للشراء اون لاين\n( 3 ) للأسعار وفروع البيع\n( 4 ) للتركيبات \nمتابعه طلب الصيانه ( 5 )",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "text" : "Please stay online as we will connect you to one of our customer support representative.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "TRANSFER_TO_AGENT_BRAND",
            "type" : "failover",
            "action" : "UnassignWithoutRouted",
            "effect" : "routed",
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "Please stay online as we will connect you to one of our customer support representative.",
                    "interactiveType" : "message"
                },
                {
                    "text" : "يرجى الانتظار سوف يتم تحويلك لاحد موظفى خدمة العملاء",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "To register a free visit order for AC free inspection service \nKindly provide us with your name, contact number and address and we will reply back to you ASAP",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "ممكن تبعتلنا الاسم والعنوان وهنرد عليك في اسرع وقت لتسجيل البلاغ",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "AC_Free",
            "type" : "message",
            "expiry" : {
                "seconds" : "300",
                "step" : "AC_Free_reminder"
            },
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "To register a free visit order for AC free inspection service \nKindly provide us with your name, contact number and address and we will reply back to you ASAP",
                    "interactiveType" : "message"
                },
                {
                    "text" : "ممكن تبعتلنا الاسم والعنوان وهنرد عليك في اسرع وقت لتسجيل البلاغ",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "TransferToAgent"
                }
            ],
            "cretical" : true,
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "عذرا لم نتلقي الرد \nممكن تبعتلنا الاسم والعنوان وهنرد عليك في اسرع وقت لتسجيل البلاغ",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "We didn`t receive your reply please\nTo register a free visit order for AC free inspection service Kindly provide us with your name, contact number and address and we will reply back to you ASAP",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "AC_Free_reminder",
            "type" : "message",
            "expiry" : {
                "seconds" : "300",
                "step" : "TransferToAgent"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "TransferToAgent"
                }
            ],
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "عذرا لم نتلقي الرد ممكن تبعتلنا الاسم والعنوان وهنرد عليك في اسرع وقت لتسجيل البلاغ",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply please To register a free visit order for AC free inspection service Kindly provide us with your name, contact number and address and we will reply back to you ASAP",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "getNearestThreeLG_EgyptBranches_Action",
            "type" : "action",
            "field" : "location",
            "action" : "getNearestThreeLG_EgyptBranches",
            "success" : "send_branches",
            "fail" : "no_locations_available",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_branches_svc_dwh",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "field" : "SVCbranchChoosen",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_send_locations_30_reminder_dwh"
            },
            "effect" : "Completed - Solution by Bot (SVC)"
        },
        {
            "messages" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_branches_svc_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "field" : "SVCbranchChoosen",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_send_locations_30_reminder_ooo"
            },
            "effect" : "Completed - Solution by Bot (SVC)"
        },
        {
            "messages" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_branches_brand_shop_dwh",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "field" : "brandShopBranchChoosen",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_send_locations_30_reminder_dwh"
            }
        },
        {
            "messages" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_branches_brand_shop_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "The nearest branches to you, please choose the branch.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اقرب الفروع لسيادتكم، الرجاء اختيار الفرع.",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "$branch1",
                        "$branch2",
                        "$branch3"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "field" : "brandShopBranchChoosen",
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_send_locations_30_reminder_ooo"
            }
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Unfortunately, there are no available branches near you.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "للأسف ، لا توجد فروع بالقرب منك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "no_locations_available",
            "type" : "break",
            "repeat" : 1,
            "next" : "assistance_menu_after_branches",
            "clarification" : [
                {
                    "text" : "للأسف ، لا توجد فروع بالقرب منك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Unfortunately, there are no available branches near you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "assistance_menu_after_branches",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للتحدث لخدمة العملاء"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart"
                },
                {
                    "entity" : "other",
                    "step" : "Request2-wrong"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "AGENT",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "THREE",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-sub"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply, Please send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال رد، الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_30_min_reminder",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "We didn`t receive your reply, Please send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لم يتم استقبال رد، الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "600",
                "step" : "svc_40_min_reminder"
            },
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد، سننهي المحادثة، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر.\n شكرا لك وأبقى آمنا.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can contact us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_40_min_reminder",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "نظرًا لعدم وجود رد، سننهي المحادثة، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر.\n شكرا لك وأبقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "As there is no response, we will end the chat, you can contact us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "svc_45_min_reminder"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "svc_last_step_reminder"
                }
            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_45_min_reminder",
            "type" : "action",
            "action" : "closeSubMenuIVR",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_last_step_reminder",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "Please send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)",
            "expiry" : {
                "seconds" : "300",
                "step" : "svc_45_min_reminder"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة.\nالرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat.\nPlease send your location.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_ooo_30min_reminder",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat.\nPlease send your location.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. الرجاء ارسال موقعك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Installation-OOO"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "getNearestThreeLG_EgyptBranches_Action"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_ooo_60min_reminder"
            },
            "field" : "latlang"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_ooo_60min_reminder",
            "type" : "action",
            "action" : "closeOOO",
            "repeat" : 1,
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "getNearestThreeLG_EgyptBranches_ooo_Action",
            "type" : "action",
            "field" : "location",
            "action" : "getNearestThreeLG_EgyptBranches",
            "success" : "send_branches_ooo",
            "fail" : "no_locations_available_ooo",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Unfortunately, there are no available branches near you.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "للأسف ، لا توجد فروع بالقرب منك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "no_locations_available_ooo",
            "type" : "break",
            "repeat" : 1,
            "next" : "assistance_menu_after_branches_000",
            "clarification" : [
                {
                    "text" : "للأسف ، لا توجد فروع بالقرب منك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Unfortunately, there are no available branches near you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "assistance_menu_after_branches_000",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                }
            ],
            "clarification" : [
                {
                    "language" : "ar-EG",
                    "text" : "اي استفسار اخر",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا"
                    ]
                },
                {
                    "language" : "en-US",
                    "text" : "Is there anything else I can assist you with?",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No"
                    ]
                }
            ],
            "expected" : [
                {
                    "entity" : "ONE",
                    "step" : "Restart-OOO"
                },
                {
                    "entity" : "MENU",
                    "step" : "Restart-OOO"
                },
                {
                    "entity" : "YES",
                    "step" : "Restart-OOO"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "NO",
                    "step" : "Closure"
                },
                {
                    "entity" : "TWO",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "reminder30Min-OOO"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message"
        },
        {
            "messages" : [
                {
                    "text" : "اقرب الفروع لسيادتكم: \n$location",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "The nearest branches to you are\n$location.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_branches_ooo",
            "type" : "break",
            "repeat" : 1,
            "next" : "assistance_menu_after_branches_000"
        },
        {
            "messages" : [
                {
                    "text" : "للشراء وفروع البيع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "للشراء اون لاين",
                        "لفروع البيع"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Where to buy",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Online Purchase",
                        "Brand shop(Retailer)"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [
                "OBS"
            ],
            "name" : "where_to_buy",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "addBrandShopLabel_dwh"
                },
                {
                    "entity" : "LG_EGYPT_BRAND_SHOP_&_DEALER_INFORMATION",
                    "step" : "brand_shop_&_dealer_information_dwh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "where_to_buy_30_reminder_dwh"
            },
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "text" : "Only the blew products are available online\nTV , Washing Machine , Dryer , Air Conditioner, Air Purifier , Audio",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Kindly Select your product"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV",
                        "Washing Machine",
                        "Dryer",
                        "Air Conditioner",
                        "Air Purifier",
                        "Audio",
                        "Other"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "تقدر تشتري المتجات التالية فقط اون لاين\nشاشة ,غسالة, مجفف, تكييف,منقي الهواء , اجهزة صوتية",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "يرجى اختيار المنتج"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة",
                        "غسالة",
                        "مجفف",
                        "تكييف",
                        "منقى الهواء",
                        "أجهزة سمعية",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_TV",
                    "step" : "TV"
                },
                {
                    "entity" : "LG_EGYPT_WASHING_MACHINE",
                    "step" : "washing_machine"
                },
                {
                    "entity" : "LG_EGYPT_DRYER",
                    "step" : "dryer"
                },
                {
                    "entity" : "LG_EGYPT_RAC",
                    "step" : "RAC"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS",
                    "step" : "air_purifiers"
                },
                {
                    "entity" : "LG_EGYPT_AUDIO",
                    "step" : "audio"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "online_purchase_30_reminder_dwh"
            },
            "effect" : "Completed - Solution by Bot (Brand Shop)"
        },
        {
            "messages" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG branches.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب فروع البيع \nاو دوس على «كل فروع البيع» لو عايز تشوف كل الفروع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل فروع البيع"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_dwh",
            "type" : "message",
            "repeat" : 0,
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "brand_shop_all_locations"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "brand_shop_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_&_dealer_information_dwh_30_reminder"
            },
            "field" : "latlang",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "messages" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG branches.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب فروع البيع \nاو دوس على «كل فروع البيع» لو عايز تشوف كل الفروع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل فروع البيع"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_ooo",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG branches.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب فروع البيع \nاو دوس على «كل فروع البيع» لو عايز تشوف كل الفروع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل فروع البيع"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "brand_shop_all_locations"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "brand_shop_share_my_location_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                }
            ],
            "field" : "latlang",
            "effect" : "Completed - Solution by Bot (Dealer)"
        },
        {
            "messages" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG SVCs",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب مركز صيانة, او دوس على «كل مراكز الخدمة» لو عايز تشوف كل المراكز",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل مراكز الخدمة"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_dwh",
            "type" : "message",
            "repeat" : 0,
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "service_centers_all_locations"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "service_centers_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_center_dwh_30_reminder"
            },
            "field" : "latlang",
            "effect" : "Completed - Solution by Bot (SVC)"
        },
        {
            "messages" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG SVCs",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب مركز صيانة, او دوس على «كل مراكز الخدمة» لو عايز تشوف كل المراكز",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل مراكز الخدمة"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_ooo",
            "type" : "message",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "Please share your location to find out the nearest branch to you or press here to view all LG SVCs",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Share my location",
                        "View all branches"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "ابعتلنا اللوكيشن بتاعك وهنبعتلك اقرب مركز صيانة, او دوس على «كل مراكز الخدمة» لو عايز تشوف كل المراكز",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "ارسال الموقع الحالي",
                        "كل مراكز الخدمة"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "service_centers_all_locations"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "service_centers_share_my_location_ooo"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_center_30_reminder_ooo"
            },
            "field" : "latlang",
            "effect" : "Completed - Solution by Bot (SVC)"
        },
        {
            "messages" : [
                {
                    "text" : "Anything else can I assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Chat with live agent"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اي استفسار اخر ؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "تحدث مع خدمة العملاء"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_dwh",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "assistance_menu_30_reminder_dwh"
            }
        },
        {
            "messages" : [
                {
                    "text" : "Anything else can I assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Main Menu"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اي استفسار اخر؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "للقائمة الرئيسة"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_ooo",
            "type" : "message",
            "repeat" : 1,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_MAIN_MENU",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "cretical" : true,
            "expiry" : {
                "seconds" : "1800",
                "step" : "assistance_menu_30_reminder_ooo"
            }
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online\n: https://www.lg.com/eg_en/tvs",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\n: https://www.lg.com/eg_ar/tvs",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "TV",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online.\nhttps://www.lg.com/eg_en/washing-machines .",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\nhttps://www.lg.com/eg_ar/washing-machines",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "washing_machine",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online\nhttps://www.lg.com/eg_en/dryers",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\nhttps://www.lg.com/eg_ar/dryers",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "dryer",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online\nhttps://www.lg.com/eg_en/split-air-conditioners",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\nhttps://www.lg.com/eg_ar/split-air-conditioners",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "RAC",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online\nhttps://www.lg.com/eg_en/air-purifiers",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\nhttps://www.lg.com/eg_ar/air-purifier",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "air_purifiers",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product online\nhttps://www.lg.com/eg_en/audio",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اون لاين من خلال الرابط التالي :\nhttps://www.lg.com/eg_ar/audio",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "audio",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "برجاء الانتظار سوف يتم تحويلكم لاحد ممثلي خدمة العملاء.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Please stay online as we will connect you to one of our customer support representatives.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "Unassign_duw",
            "type" : "failover",
            "action" : "Unassign",
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "text" : "You can register your Installation request through the below link, and we will contact you within 24 hours to arrange the visit appointment.\nPlease find the below link:\nhttps://www.lg.com/eg_en/support/repair-warranty/request-installation?utm_source=Whatsapp&utm_medium=Whatsapp&utm_campaign=Request_Installation_EN&utm_id=Request_Installation_EN\n\nYou can track your request by using your Tracking Number through the below link\nhttps://b2b.lgeme.com/rts",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تسجل طلب تركيب من خلال الرابط التالي و هنتواصل معاك في خلال 24 ساعة لتأكيد موعد الزيارة \nاستخدم الرابط ادناه\nhttps://www.lg.com/eg_ar/support/repair-warranty/request-installation?utm_source=Whatsapp&utm_medium=Whatsapp&utm_campaign=Request_Installation_AR&utm_id=Request_Installation_AR\n\nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [
                "INSTALLATIONS"
            ],
            "name" : "installation_request",
            "type" : "break",
            "repeat" : 1,
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Installation)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "determine_assistance_menu_type",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "assistance_menu_dwh",
            "fail" : "assistance_menu_ooo"
        },
        {
            "messages" : [
                {
                    "text" : "Please choose from the below options.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Track your order."
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Online purchase inquires",
                        "Install / Repair Request"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "الرجاء الاختيار من التالي.",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "متابعة طلبك"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "متابعة طلب شراء اون لاين",
                        "متابعة طلب تركيب / صيانة"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order",
            "type" : "message",
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE_INQUIRES",
                    "step" : "online_purchase_inquires_action"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_OR_REPAIR_REQUEST",
                    "step" : "installation_or_repair_request_action"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "track_your_order_30_reminder_dwh"
            },
            "repeat" : 0,
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [
                "OBS"
            ],
            "name" : "online_purchase_inquires_action",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "Unassign_duw",
            "fail" : "online_purchase_inquires_ooo",
            "effect" : "Completed - Solution by Bot (Brand Shop)"
        },
        {
            "messages" : [
                {
                    "text" : "Sorry to receive this support, we will need to take assistance from our specialized chat agent. But unfortunately we are out of office. \u000bTo receive support through Live Agent, please reply back during the working hours\nAwaiting for your response during working hours. Thank you.",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Main Menu"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "نأسف هذه الخدمة تحتاج الى موظف خدمة العملاء \nيمكنك التواصل معنا للتحدث الى احد ممثلي خدمة العملاء في مواعيد العمل \nفي انتظار تواصلك مرة اخرى , شكرا و سعداء بخدمة حضرتك",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "القائمة الرئيسية"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_inquires_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_MAIN_MENU",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "effect" : "Rejected - Out Of Working Hour Customer",
            "expiry" : {
                "seconds" : "1800",
                "step" : "online_purchase_inquires_ooo_30_reminder"
            }
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "If you have the tracking number you can track your request through the following link :\nhttps://b2b.lgeme.com/rts \nIf you don`t have the tracking number please select chat with live agent.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لو معاك رقم الطلب تقدر تتابع طلبك من خلال الرابط التالي:https://b2b.lgeme.com/rts \nلو مش معاك رقم الطلب اختارالتحدث لخدمة العملاء",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_dwh",
            "repeat" : 1,
            "type" : "break",
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Installation)"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "If you have the tracking number you can track your request through the following link : \nhttps://b2b.lgeme.com/rts \nIf you don`t have the tracking number please request a callback.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لو معاك رقم الطلب تقدر تتابع طلبك من خلال الرابط التالي:https://b2b.lgeme.com/rts \nلو مش معاك رقم الطلب اختار طلب الاتصال بك",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_ooo",
            "type" : "break",
            "repeat" : 1,
            "next" : "installation_or_repair_request_ooo_assistance",
            "effect" : "Completed - Solution by Bot (Installation)"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "We will contact you back during our working hours\nOur working hours start from 9 AM.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "هنكلمك في مواعيد العمل , مواعيد عملنا بتبدأ الساعة 9 صباحاً.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "We will contact you back during our working hours\nOur working hours start from 9 AM.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "هنكلمك في مواعيد العمل , مواعيد عملنا بتبدأ الساعة 9 صباحاً.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "callback_request_ooo",
            "repeat" : 1,
            "type" : "break",
            "next" : "callback_request_assistance_menu_ooo",
            "effect" : "Rejected-Out Of Working Hour Customer"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Good Morning 🌞\nOur Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agents will assist you.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "صباح الخير 🌞 \nمواعيد عملنا بدأت دلوقتي\n تقدر تبعتلنا استفسارك وهنرد عليك في اسرع وقت ممكن",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "MorningReminder",
            "type" : "message",
            "repeat" : 1,
            "effect" : "pending",
            "cretical" : false
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "Unassign_check_wh",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "Unassign_duw",
            "fail" : "ooo_message"
        },
        {
            "messages" : [
                {
                    "text" : "Sorry to receive this support, we will need to take assistance from our specialized chat agent. But unfortunately we are out of office. \u000bTo receive support through Live Agent, please reply back during the working hours\nAwaiting for your response during working hours. Thank you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نأسف هذه الخدمة تحتاج الى موظف خدمة العملاء \nيمكنك التواصل معنا للتحدث الى احد ممثلي خدمة العملاء في مواعيد العمل \nفي انتظار تواصلك مرة اخرى , شكرا و سعداء بخدمة حضرتك",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "ooo_message",
            "type" : "end",
            "action" : "",
            "repeat" : 1,
            "effect" : "Rejected - Out Of Working Hour Customer"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Thank you for contacting LG Electronics, Have a nice day.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "end",
            "type" : "end",
            "effect" : "",
            "clarification" : [
                {
                    "text" : "Thank you for contacting LG Electronics, Have a nice day.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "شكرا لاتصالك بشركة ال جي للالكترونيات , نتمنالك يوم سعيد.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "restart_main_menu",
            "type" : "action",
            "action" : "Restart",
            "success" : "restart_wh_check",
            "fail" : "restart_wh_check"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "restart_wh_check",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "Options",
            "fail" : "Options-OOO"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_action",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "installation_or_repair_request_dwh",
            "fail" : "installation_or_repair_request_ooo"
        },
        {
            "messages" : [
                {
                    "text" : "Any thing else can I assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "Call back Request"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اي استفسار اخر؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "لطلب الاتصال بك"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_ooo_assistance",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_CALL_BACK_REQUEST",
                    "step" : "callback_request_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "installation_or_repair_request_assistance_30_reminder_ooo"
            },
            "effect" : "Completed - Solution by Bot (Installation)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "where_to_buy_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "where_to_buy_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "addBrandShopLabel_dwh"
                },
                {
                    "entity" : "LG_EGYPT_BRAND_SHOP_&_DEALER_INFORMATION",
                    "step" : "brand_shop_&_dealer_information_dwh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "where_to_buy_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "addBrandShopLabel_dwh"
                },
                {
                    "entity" : "LG_EGYPT_BRAND_SHOP_&_DEALER_INFORMATION",
                    "step" : "brand_shop_&_dealer_information_dwh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "track_your_order_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE_INQUIRES",
                    "step" : "online_purchase_inquires_action"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_OR_REPAIR_REQUEST",
                    "step" : "installation_or_repair_request_action"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE_INQUIRES",
                    "step" : "online_purchase_inquires_action"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_OR_REPAIR_REQUEST",
                    "step" : "installation_or_repair_request_action"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_inquires_ooo_30_reminder",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "online_purchase_inquires_ooo_60_reminder"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_MAIN_MENU",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_inquires_ooo_60_reminder",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [

            ],
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Rejected - Out Of Working Hour Customer"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "online_purchase_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_TV",
                    "step" : "TV"
                },
                {
                    "entity" : "LG_EGYPT_WASHING_MACHINE",
                    "step" : "washing_machine"
                },
                {
                    "entity" : "LG_EGYPT_DRYER",
                    "step" : "dryer"
                },
                {
                    "entity" : "LG_EGYPT_RAC",
                    "step" : "RAC"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS",
                    "step" : "air_purifiers"
                },
                {
                    "entity" : "LG_EGYPT_AUDIO",
                    "step" : "audio"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_TV",
                    "step" : "TV"
                },
                {
                    "entity" : "LG_EGYPT_WASHING_MACHINE",
                    "step" : "washing_machine"
                },
                {
                    "entity" : "LG_EGYPT_DRYER",
                    "step" : "dryer"
                },
                {
                    "entity" : "LG_EGYPT_RAC",
                    "step" : "RAC"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS",
                    "step" : "air_purifiers"
                },
                {
                    "entity" : "LG_EGYPT_AUDIO",
                    "step" : "audio"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Anything else can I assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "End Chat"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اي استفسار اخر؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "انهاء المحادثه"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "clarification" : [
                {
                    "text" : "Anything else can I assist you with?",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Yes",
                        "No",
                        "End Chat"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "اي استفسار اخر؟",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "نعم",
                        "لا",
                        "انهاء المحادثه"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "callback_request_assistance_menu_ooo",
            "type" : "message",
            "repeat" : 1,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "Closure",
                    "step" : "Closure"
                }
            ],
            "cretical" : true,
            "expiry" : {
                "seconds" : "1800",
                "step" : "callback_request_assistance_menu_ooo_30_reminder"
            }
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "callback_request_assistance_menu_ooo_30_reminder",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "callback_request_assistance_menu_ooo_60_reminder"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "Closure",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "callback_request_assistance_menu_ooo_60_reminder",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Rejected - Out Of Working Hour Customer"
        },
        {
            "messages" : [
                {
                    "text" : "للشراء وفروع البيع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "للشراء اون لاين",
                        "لفروع البيع"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Where to buy",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Online Purchase",
                        "Brand shop(Retailer)"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [
                "OBS"
            ],
            "clarification" : [
                {
                    "text" : "للشراء وفروع البيع",
                    "language" : "ar-EG",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "للشراء اون لاين",
                        "لفروع البيع"
                    ],
                    "interactiveType" : "buttons"
                },
                {
                    "text" : "Where to buy",
                    "language" : "en-US",
                    "type" : "interactive",
                    "contentType" : "buttons",
                    "buttons" : [
                        "Online Purchase",
                        "Brand shop(Retailer)"
                    ],
                    "interactiveType" : "buttons"
                }
            ],
            "name" : "where_to_buy_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_BRAND_SHOP_&_DEALER_INFORMATION",
                    "step" : "brand_shop_&_dealer_information_ooo"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "addBrandShopLabel_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "where_to_buy_30_reminder_ooo"
            }
        },
        {
            "messages" : [
                {
                    "text" : "Only the blew products are available online\nTV , Washing Machine , Dryer , Air Conditioner, Air Purifier , Audio",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Kindly Select your product"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV",
                        "Washing Machine",
                        "Dryer",
                        "Air Conditioner",
                        "Air Purifier",
                        "Audio",
                        "Other"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "تقدر تشتري المتجات التالية فقط اون لاين\nشاشة ,غسالة, مجفف, تكييف,منقي الهواء , اجهزة صوتية",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "يرجى اختيار المنتج"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة",
                        "غسالة",
                        "مجفف",
                        "تكييف",
                        "منقى الهواء",
                        "أجهزة سمعية",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "clarification" : [
                {
                    "text" : "Only the blew products are available online\nTV , Washing Machine , Dryer , Air Conditioner, Air Purifier , Audio",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Kindly Select your product"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV",
                        "Washing Machine",
                        "Dryer",
                        "Air Conditioner",
                        "Air Purifier",
                        "Audio",
                        "Other"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "تقدر تشتري المتجات التالية فقط اون لاين\nشاشة ,غسالة, مجفف, تكييف,منقي الهواء , اجهزة صوتية",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "يرجى اختيار المنتج"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة",
                        "غسالة",
                        "مجفف",
                        "تكييف",
                        "منقى الهواء",
                        "أجهزة سمعية",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "name" : "online_purchase_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_TV",
                    "step" : "TV"
                },
                {
                    "entity" : "LG_EGYPT_WASHING_MACHINE",
                    "step" : "washing_machine"
                },
                {
                    "entity" : "LG_EGYPT_DRYER",
                    "step" : "dryer"
                },
                {
                    "entity" : "LG_EGYPT_RAC",
                    "step" : "RAC"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS",
                    "step" : "air_purifiers"
                },
                {
                    "entity" : "LG_EGYPT_AUDIO",
                    "step" : "audio"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "online_purchase_30_reminder_ooo"
            },
            "effect" : "Rejected - Out Of Working Hour Customer"
        },
        {
            "messages" : [
                {
                    "text" : "Please choose from the below options.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Track your order."
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Online purchase inquires",
                        "Install / Repair Request"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "الرجاء الاختيار من التالي.",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "متابعة طلبك"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "متابعة طلب شراء اون لاين",
                        "متابعة طلب تركيب / صيانة"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order_ooo",
            "type" : "message",
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE_INQUIRES",
                    "step" : "online_purchase_inquires_action"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_OR_REPAIR_REQUEST",
                    "step" : "installation_or_repair_request_action"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "track_your_order_30_reminder_ooo"
            },
            "repeat" : 1
        },
        {
            "messages" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "where_to_buy_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "where_to_buy_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "addBrandShopLabel_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "step" : "brand_shop_&_dealer_information_ooo",
                    "entity" : "LG_EGYPT_BRAND_SHOP_&_DEALER_INFORMATION"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "where_to_buy_60_reminder_ooo",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "",
                "step" : "reminder45Min-sub"
            },
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "track_your_order_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE_INQUIRES",
                    "step" : "online_purchase_inquires_action"
                },
                {
                    "entity" : "LG_EGYPT_INSTALLATION_OR_REPAIR_REQUEST",
                    "step" : "installation_or_repair_request_action"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "track_your_order_60_reminder_ooo",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "",
                "step" : "reminder45Min-sub"
            },
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "language" : "ar-EG",
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "online_purchase_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_TV",
                    "step" : "TV"
                },
                {
                    "entity" : "LG_EGYPT_WASHING_MACHINE",
                    "step" : "washing_machine"
                },
                {
                    "entity" : "LG_EGYPT_DRYER",
                    "step" : "dryer"
                },
                {
                    "entity" : "LG_EGYPT_RAC",
                    "step" : "RAC"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS",
                    "step" : "air_purifiers"
                },
                {
                    "entity" : "LG_EGYPT_AUDIO",
                    "step" : "audio"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "online_purchase_60_reminder_ooo",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "",
                "step" : "reminder45Min-sub"
            },
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "300",
                "step" : "assistance_menu_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "assistance_menu_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_LG_EGYPT_CHAT_WITH_A_LIVE_AGENT",
                    "step" : "Unassign_check_wh"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "assistance_menu_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_assistance_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "installation_or_repair_request_assistance_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_YES",
                    "step" : "restart_main_menu"
                },
                {
                    "entity" : "LG_EGYPT_NO",
                    "step" : "end"
                },
                {
                    "entity" : "LG_EGYPT_CALL_BACK_REQUEST",
                    "step" : "callback_request_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_or_repair_request_assistance_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Please choose your inquiry from this list.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Follow Up"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Installation Request",
                        "Repair Request",
                        "Online Purchase",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لمتابعة طلبك"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "لمتابعة طلب تركيب",
                        "لمتابعة طلب صيانة",
                        "لمتابعة طلب شراء اونلاين",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_dwh",
            "type" : "message",
            "repeat" : 0,
            "expiry" : {
                "seconds" : "1800",
                "step" : "follow_up_main_30_reminder_dwh"
            },
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "online_purchase_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request_follow_up"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "text" : "Please choose your inquiry from this list.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Follow Up"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Installation Request",
                        "Repair Request",
                        "Online Purchase",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لمتابعة طلبك"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "لمتابعة طلب تركيب",
                        "لمتابعة طلب صيانة",
                        "لمتابعة طلب شراء اونلاين",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_ooo",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "follow_up_main_30_reminder_ooo"
            },
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Please choose your inquiry from this list.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Follow Up"
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "Installation Request",
                        "Repair Request",
                        "Online Purchase",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "برجاء اختيار استفسارك من القائمة",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لمتابعة طلبك"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "لمتابعة طلب تركيب",
                        "لمتابعة طلب صيانة",
                        "لمتابعة طلب شراء اونلاين",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "online_purchase_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request_follow_up"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "repeat" : 0,
            "type" : "message",
            "name" : "brand_shop_share_my_location_dwh",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك ارسال موقعك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your answer, can you please send your location again?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_share_my_location_30_reminder_dwh"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "brand_shop_share_my_location_ooo",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_share_my_location_30_reminder_ooo"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "repeat" : 0,
            "type" : "message",
            "name" : "service_centers_share_my_location_dwh",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك ارسال موقعك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your answer, can you please send your location again?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_centers_share_my_location_30_reminder_dwh"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "repeat" : 1,
            "type" : "message",
            "name" : "service_centers_share_my_location_ooo",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "language" : "en-US",
                    "text" : "Please send your location.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "الرجاء ارسال موقعك.",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "status" : "pending",
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_centers_share_my_location_30_reminder_ooo"
            },
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "latlang"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "get_brand_shop_nearest_branches",
            "type" : "action",
            "action" : "get_brand_shop_nearest_branches",
            "success" : "determine_brand_shop_send_branch_time",
            "fail" : "no_locations_available",
            "repeat" : 1
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "get_service_center_nearest_branches",
            "type" : "action",
            "action" : "get_service_center_nearest_branches",
            "success" : "determine_svc_send_branch_time",
            "fail" : "no_locations_available",
            "repeat" : 1
        },
        {
            "repeat" : null,
            "type" : "break",
            "name" : "brand_shop_all_locations",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please use the below link to find the closest dealer Location to you and you can contact them for  price inquiry.\n https://bit.ly/2UiysIF",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "يرجى الدخول على الرابط التالي لايجاد اقرب مركز بيع ويمكنك معرفة الاسعار من خلاله \n https://bit.ly/2UfH17b",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "Please use the below link to find the closest dealer Location to you and you can contact them for price inquiry. https://bit.ly/2UiysIF",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "يرجى الدخول على الرابط التالي لايجاد اقرب مركز بيع ويمكنك معرفة الاسعار من خلاله https://bit.ly/2UfH17b",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "",
            "next" : "determine_assistance_menu_type"
        },
        {
            "repeat" : null,
            "type" : "break",
            "name" : "service_centers_all_locations",
            "effect" : "",
            "cretical" : true,
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please use the below link to find the closest service center Location to you. \n https://bit.ly/3ndIgQS",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "يرجى الدخول على الرابط التالي  لإيجاد اقرب مركز خدمة \n https://bit.ly/35ltW2k",
                    "interactiveType" : "message"
                }
            ],
            "clarification" : [
                {
                    "text" : "Please use the below link to find the closest service center Location to you. https://bit.ly/3ndIgQS",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "يرجى الدخول على الرابط التالي لإيجاد اقرب مركز خدمة https://bit.ly/35ltW2k",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [

            ],
            "status" : "pending",
            "aiLabels" : [

            ],
            "interactiveType" : "message",
            "field" : "",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "You can register your Repair request through the below link, and we will contact you within 24 hours to arrange the visit appointment.\nPlease find the below link:\nhttps://www.lg.com/eg_en/support/repair-warranty/request-repair\nYou can track your request by using your Tracking Number through the below link\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تسجل طلب صيانة من خلال الرابط التالي و هنتواصل معاك في خلال 24 ساعة لتأكيد موعد الزيارة \nhttps://www.lg.com/eg_ar/support/repair-warranty/request-repair\nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "repair_request",
            "type" : "break",
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Repair registration)"
        },
        {
            "messages" : [
                {
                    "text" : "You can track your request by using your Tracking Number through the below link\nhttps://b2b.lgeme.com/rts",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تتابع طلبك من خلال الرابط التالي\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "installation_request_follow_up",
            "type" : "break",
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Installation)"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "You can track your request by using your Tracking Number through the below link\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تتابع طلبك من خلال الرابط التالي\nhttps://b2b.lgeme.com/rts",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "repair_request_follow_up",
            "type" : "break",
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Repair registration)"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "You can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [
                "OBS"
            ],
            "name" : "online_purchase_follow_up",
            "type" : "break",
            "next" : "determine_assistance_menu_type",
            "effect" : "Completed - Solution by Bot (Brand Shop)"
        },
        {
            "messages" : [
                {
                    "text" : "Kindly Select your accessories.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Accessories Purchase ."
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV - Remote Controller",
                        "Refrigrator-Filter/Shelf",
                        "Air purifiers - Filter",
                        "Microwave - Tray",
                        "Vacuum Cleaner - Filter",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "يرجى اختيار نوع الاكسسوار",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لشراء الاكسسوارات"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة (ريموت كنترول)",
                        "ثلاجة (فلتر او رف)",
                        "منقي الهواء (فلتر)",
                        "ميكروويف (الطبق الزجاجي)",
                        "مكنسة (فلتر)",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_dwh",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_TV_REMOTE_CONTROLLER",
                    "step" : "tv_remote_controller_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_REFRIGRATOR_FILTER_SHELF",
                    "step" : "refrigerator_filter_shelf_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS_FILTER",
                    "step" : "air_purifiers_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_MICROWAVE_TRAY",
                    "step" : "microwave_tray_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_VACUUM_CLEANER_FILTER",
                    "step" : "vacuum_cleaner_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "accessories_purchase_menu_30_reminder_dwh"
            }
        },
        {
            "messages" : [
                {
                    "text" : "Kindly Select your accessories.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Accessories Purchase ."
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV - Remote Controller",
                        "Refrigrator-Filter/Shelf",
                        "Air purifiers - Filter",
                        "Microwave - Tray",
                        "Vacuum Cleaner - Filter",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "يرجى اختيار نوع الاكسسوار",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لشراء الاكسسوارات"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة (ريموت كنترول)",
                        "ثلاجة (فلتر او رف)",
                        "منقي الهواء (فلتر)",
                        "ميكروويف (الطبق الزجاجي)",
                        "مكنسة (فلتر)",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_ooo",
            "type" : "message",
            "repeat" : 1,
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Kindly Select your accessories.",
                    "language" : "en-US",
                    "header" : {
                        "type" : "text",
                        "text" : "Accessories Purchase ."
                    },
                    "button" : "Choose",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "TV - Remote Controller",
                        "Refrigrator-Filter/Shelf",
                        "Air purifiers - Filter",
                        "Microwave - Tray",
                        "Vacuum Cleaner - Filter",
                        "Others"
                    ],
                    "interactiveType" : "list"
                },
                {
                    "text" : "يرجى اختيار نوع الاكسسوار",
                    "language" : "ar-EG",
                    "header" : {
                        "type" : "text",
                        "text" : "لشراء الاكسسوارات"
                    },
                    "button" : "اختر",
                    "type" : "interactive",
                    "contentType" : "list",
                    "options" : [
                        "شاشة (ريموت كنترول)",
                        "ثلاجة (فلتر او رف)",
                        "منقي الهواء (فلتر)",
                        "ميكروويف (الطبق الزجاجي)",
                        "مكنسة (فلتر)",
                        "اخرى"
                    ],
                    "interactiveType" : "list"
                }
            ],
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_TV_REMOTE_CONTROLLER",
                    "step" : "tv_remote_controller_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_REFRIGRATOR_FILTER_SHELF",
                    "step" : "refrigerator_filter_shelf_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS_FILTER",
                    "step" : "air_purifiers_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_MICROWAVE_TRAY",
                    "step" : "microwave_tray_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_VACUUM_CLEANER_FILTER",
                    "step" : "vacuum_cleaner_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ],
            "expiry" : {
                "seconds" : "1800",
                "step" : "accessories_purchase_menu_30_reminder_ooo"
            }
        },
        {
            "messages" : [
                {
                    "text" : "Please find the below link to buy LG's product accessories online.\nhttps://www.lg.com/eg_en/tv-and-home-entertainment-accessories \nYou can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اكسسوارات ال جي اون لاين من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/tv-and-home-entertainment-accessories \nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "tv_remote_controller_accessories_purchase",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product accessories online.\nhttps://www.lg.com/eg_en/home-appliance-accessories \nYou can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اكسسوارات ال جي اون لاين من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/home-appliance-accessories \nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "refrigerator_filter_shelf_accessories_purchase",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product accessories online.\nhttps://www.lg.com/eg_en/air-conditioners-and-air-purifiers-accessories \nYou can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اكسسوارات ال جي اون لاين من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/air-conditioner-and-air-purifier-accessories \nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "air_purifiers_filter_accessories_purchase",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product accessories online.\nhttps://www.lg.com/eg_en/home-appliance-accessories \nYou can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اكسسوارات ال جي اون لاين من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/home-appliance-accessories \nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "microwave_tray_accessories_purchase",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "Please find the below link to buy LG's product accessories online.\nhttps://www.lg.com/eg_en/home-appliance-accessories \nYou can track your request by using your Tracking Number through the below link\nhttps://www.lg.com/eg_en/shop/sales/guest/form/",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "تقدر تشتري اكسسوارات ال جي اون لاين من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/home-appliance-accessories \nتقدر تتابع طلبك من خلال الرابط التالي\nhttps://www.lg.com/eg_ar/shop/sales/guest/form/",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "vacuum_cleaner_filter_accessories_purchase",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_dwh_30_reminder",
            "type" : "message",
            "expiry" : {
                "seconds" : "600",
                "step" : "brand_shop_&_dealer_information_dwh_40_reminder"
            },
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "brand_shop_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "brand_shop_all_locations"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_dwh_40_reminder",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "brand_shop_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "brand_shop_all_locations"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "field" : "latlang",
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_dwh_30_reminder",
            "type" : "message",
            "expiry" : {
                "step" : "service_center_dwh_40_reminder",
                "seconds" : "600"
            },
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "service_centers_all_locations"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "service_centers_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_dwh_40_reminder",
            "type" : "message",
            "repeat" : 0,
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "service_centers_all_locations"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "service_centers_share_my_location_dwh"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                }
            ],
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "field" : "latlang",
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_center_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "service_centers_all_locations"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "service_centers_share_my_location_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                }
            ],
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_center_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_&_dealer_information_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_VIEW_ALL_BRANCHES",
                    "step" : "brand_shop_all_locations"
                },
                {
                    "entity" : "LG_EGYPT_SHARE_MY_LOCATION",
                    "step" : "brand_shop_share_my_location_ooo"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                }
            ],
            "field" : "latlang"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_&_dealer_information_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "follow_up_main_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "online_purchase_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request_follow_up"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "online_purchase_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request_follow_up"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "follow_up_main_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_INSTALLATION_REQUEST",
                    "step" : "installation_request_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_ONLINE_PURCHASE",
                    "step" : "online_purchase_follow_up"
                },
                {
                    "entity" : "LG_EGYPT_REPAIR_REQUEST",
                    "step" : "repair_request_follow_up"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "follow_up_main_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "accessories_purchase_menu_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_TV_REMOTE_CONTROLLER",
                    "step" : "tv_remote_controller_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_REFRIGRATOR_FILTER_SHELF",
                    "step" : "refrigerator_filter_shelf_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS_FILTER",
                    "step" : "air_purifiers_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_MICROWAVE_TRAY",
                    "step" : "microwave_tray_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_VACUUM_CLEANER_FILTER",
                    "step" : "vacuum_cleaner_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                },
                {
                    "entity" : "LG_EGYPT_TV_REMOTE_CONTROLLER",
                    "step" : "tv_remote_controller_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_REFRIGRATOR_FILTER_SHELF",
                    "step" : "refrigerator_filter_shelf_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS_FILTER",
                    "step" : "air_purifiers_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_MICROWAVE_TRAY",
                    "step" : "microwave_tray_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_VACUUM_CLEANER_FILTER",
                    "step" : "vacuum_cleaner_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "accessories_purchase_menu_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "Closure"
                },
                {
                    "entity" : "LG_EGYPT_TV_REMOTE_CONTROLLER",
                    "step" : "tv_remote_controller_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_REFRIGRATOR_FILTER_SHELF",
                    "step" : "refrigerator_filter_shelf_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_AIR_PURIFIERS_FILTER",
                    "step" : "air_purifiers_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_MICROWAVE_TRAY",
                    "step" : "microwave_tray_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_VACUUM_CLEANER_FILTER",
                    "step" : "vacuum_cleaner_filter_accessories_purchase"
                },
                {
                    "entity" : "LG_EGYPT_OTHER",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "accessories_purchase_menu_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_share_my_location_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "brand_shop_share_my_location_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_share_my_location_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_share_my_location_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_share_my_location_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_brand_shop_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "Closure"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_share_my_location_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_centers_share_my_location_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 0,
            "expiry" : {
                "seconds" : "600",
                "step" : "service_centers_share_my_location_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_centers_share_my_location_40_reminder_dwh",
            "repeat" : 0,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك، هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_centers_share_my_location_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "service_centers_share_my_location_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "LG_EGYPT_LATLANG",
                    "step" : "get_service_center_nearest_branches"
                },
                {
                    "entity" : "other",
                    "step" : "IsWorking"
                }
            ]
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "service_centers_share_my_location_60_reminder_ooo",
            "type" : "end",
            "repeat" : 1,
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "checkSVCBranchExist",
            "type" : "action",
            "action" : "checkSVCBranchExist",
            "field" : "location",
            "success" : "send_selected_branch",
            "fail" : "determine_svc_wrong_time"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "checkBrandShopBranchExist",
            "type" : "action",
            "action" : "checkBrandShopBranchExist",
            "field" : "location",
            "success" : "send_selected_branch",
            "fail" : "determine_brand_shop_wrong_time"
        },
        {
            "messages" : [
                {
                    "text" : "$location",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "$location",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "send_selected_branch",
            "type" : "break",
            "next" : "determine_assistance_menu_type"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "action" : "IsWorking",
            "type" : "action",
            "name" : "determine_svc_send_branch_time",
            "success" : "send_branches_svc_dwh",
            "fail" : "send_branches_svc_ooo"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "determine_brand_shop_send_branch_time",
            "action" : "IsWorking",
            "type" : "action",
            "success" : "send_branches_brand_shop_dwh",
            "fail" : "send_branches_brand_shop_ooo"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_send_locations_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "600",
                "step" : "brand_shop_send_locations_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist"
                }
            ],
            "field" : "brandShopBranchChoosen"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_send_locations_40_reminder_dwh",
            "repeat" : 1,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist"
                }
            ],
            "field" : "brandShopBranchChoosen",
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_send_locations_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_send_locations_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist"
                }
            ],
            "field" : "brandShopBranchChoosen"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_send_locations_60_reminder_ooo",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_send_locations_30_reminder_dwh",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لم يتم استقبال الرد برجاء اختيار استفسارك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "600",
                "step" : "svc_send_locations_40_reminder_dwh"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist"
                }
            ],
            "field" : "SVCbranchChoosen"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_send_locations_40_reminder_dwh",
            "repeat" : 1,
            "type" : "message",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "expiry" : {
                "seconds" : "300",
                "step" : "reminder45Min-sub"
            },
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist"
                }
            ],
            "field" : "SVCbranchChoosen",
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Its been a while that we have not received any response from you. If there is no response for 30 minutes, we will end this chat. But you can connect with us again for further query and we will be happy to support you.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_send_locations_30_reminder_ooo",
            "type" : "message",
            "cretical" : true,
            "clarification" : [
                {
                    "text" : "لقد مر وقت لم نتلق أي رد منك إذا لم يكن هناك رد لمدة 30 دقيقة ، فسننهي هذه المحادثة. لكن يمكنك التواصل معنا مرة أخرى لمزيد من الاستعلام وسنكون سعداء بدعمك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "We didn`t receive your reply Please reply with your selected option.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ],
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_send_locations_60_reminder_ooo"
            },
            "expected" : [
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist"
                },
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist"
                }
            ],
            "field" : "SVCbranchChoosen"
        },
        {
            "messages" : [
                {
                    "language" : "en-US",
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_send_locations_60_reminder_ooo",
            "repeat" : 1,
            "type" : "end",
            "clarification" : [
                {
                    "text" : "As there is no response, we will end the chat, you can connect to us any time if you have further inquiries. Thank you and Stay Safe.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "نظرًا لعدم وجود رد ، سننهي المحادثة ، يمكنك الاتصال بنا في أي وقت إذا كان لديك استفسار آخر. شكرا لك وابقى آمنا.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : false,
            "expected" : [

            ],
            "effect" : "Completed -No Response in Sub Menu (IB)"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "determine_svc_wrong_time",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "svc_send_location_wrong_dwh",
            "fail" : "Closure"
        },
        {
            "messages" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "svc_send_location_wrong_dwh",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "svc_send_locations_30_reminder_dwh"
            },
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkSVCBranchExist_second_wrong"
                },
                {
                    "entity" : "other",
                    "step" : "checkSVCBranchExist_second_wrong"
                }
            ],
            "field" : "SVCbranchChoosen"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "determine_brand_shop_wrong_time",
            "type" : "action",
            "action" : "IsWorking",
            "success" : "brand_shop_send_location_wrong_dwh",
            "fail" : "Closure"
        },
        {
            "messages" : [
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "brand_shop_send_location_wrong_dwh",
            "type" : "message",
            "repeat" : 1,
            "expiry" : {
                "seconds" : "1800",
                "step" : "brand_shop_send_locations_30_reminder_dwh"
            },
            "clarification" : [
                {
                    "text" : "Sorry, I couldn't understand your selection, can you please specify it again ?",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "عذرا لم اتلقى اختيارك, هل يمكنك تحديد اختيارك مره اخرى؟",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ],
            "cretical" : true,
            "expected" : [
                {
                    "entity" : "LG_EGYPT_ANY",
                    "step" : "checkBrandShopBranchExist_second_wrong"
                },
                {
                    "entity" : "other",
                    "step" : "checkBrandShopBranchExist_second_wrong"
                }
            ],
            "field" : "brandShopBranchChoosen"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "checkSVCBranchExist_second_wrong",
            "type" : "action",
            "action" : "checkSVCBranchExist",
            "field" : "location",
            "success" : "send_selected_branch",
            "fail" : "IsWorking"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "checkBrandShopBranchExist_second_wrong",
            "type" : "action",
            "action" : "checkBrandShopBranchExist",
            "field" : "location",
            "success" : "send_selected_branch",
            "fail" : "IsWorking"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "addBrandShopLabel_dwh",
            "type" : "action",
            "action" : "brandShopLabel",
            "success" : "online_purchase",
            "fail" : "online_purchase"
        },
        {
            "messages" : [

            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "addBrandShopLabel_ooo",
            "type" : "action",
            "action" : "brandShopLabel",
            "success" : "online_purchase_ooo",
            "fail" : "online_purchase_ooo"
        },
        {
            "messages" : [
                {
                    "text" : "Good Evening, Welcome to LG Electronics Egypt Ramadan Kareem 🕌 Iftar cut off time from 06:00 PM ~ 07:30 PM, We will contact you back after Iftar time. You can receive support through our Chatbot on the below categories. Thank you and happy to serve you any time.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "language" : "ar-EG",
                    "text" : "مرحبا بك في شركة الـ جي للالكترونيات مصر رمضان كريم 🌙 وقت الافطار بيتم وقف الخدمة من الساعة 06:00 مساءا الى الساعة 07:30 مساءا، هنبعتلك رسالة بعد وقت الإفطار. يمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت. شكرا وسعداء بخدمة حضرتك.",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "IftarTime",
            "type" : "break",
            "next" : "MORE-30-DAYS-OOO-Iftar",
            "clarification" : [
                {
                    "text" : "Good Evening, Welcome to LG Electronics Egypt Ramadan Kareem 🕌 Iftar cut off time from 06:00 PM ~ 07:30 PM, We will contact you back after Iftar time. You can receive support through our Chatbot on the below categories. Thank you and happy to serve you any time.",
                    "language" : "en-US",
                    "interactiveType" : "message"
                },
                {
                    "text" : "مرحبا بك في شركة الـ جي للالكترونيات مصر رمضان كريم 🌙 وقت الافطار بيتم وقف الخدمة من الساعة 06:00 مساءا الى الساعة 07:30 مساءا، هنبعتلك رسالة بعد وقت الإفطار. يمكنك استخدام بعض الاختيارات من القائمة التالية من خلال خدمة الرد الالي في اي وقت. شكرا وسعداء بخدمة حضرتك.",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                }
            ]
        },
        {
            "messages" : [
                {
                    "text" : "مساء الخير\nموظفي خدمة العملاء متاحون الان\nتقدر تبعتلنا استفسارك وهنرد عليك في اسرع وقت ممكن حتى الساعة 9 مساءا",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "language" : "en-US",
                    "text" : "Good Evening\nOur Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agent will assist you till 9 PM",
                    "interactiveType" : "message"
                }
            ],
            "status" : "pending",
            "interactiveType" : "message",
            "aiLabels" : [

            ],
            "name" : "After_Iftar_Time",
            "type" : "message",
            "clarification" : [
                {
                    "text" : "مساء الخير\nموظفي خدمة العملاء متاحون الان\nتقدر تبعتلنا استفسارك وهنرد عليك في اسرع وقت ممكن حتى الساعة 9 مساءا",
                    "language" : "ar-EG",
                    "interactiveType" : "message"
                },
                {
                    "text" : "Good Evening\nOur Agents are available now. If you need further support from our live agent, please reply back to this message and one of our specialized agent will assist you till 9 PM",
                    "language" : "en-US",
                    "interactiveType" : "message"
                }
            ]
        }
    ],
    "failStep" : {
        "repeat" : 1,
        "type" : "action",
        "name" : "IsWorking",
        "action" : "IsWorking",
        "waitForInput" : true,
        "effect" : "Failback",
        "success" : "Greeting",
        "fail" : "OutOfWorking",
        "status" : "pending"
    },
    "name" : "Welcome",
    "rejectedSatatuses" : [
        {
            "text" : "Rejected - No action needed",
            "closable" : true
        },
        {
            "text" : "Rejected - Outbound Customer",
            "closable" : true
        }
    ],
    "completedStatuses" : [
        {
            "text" : "Completed - Long Pending Chats",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - Dealer Request",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - Counsel Chat",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : true
        },
        {
            "text" : "Completed - Installation Request",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : true
        },
        {
            "text" : "Completed - Repair Request",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : true
        },
        {
            "text" : "Completed - IVR Call Back Support",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : true
        },
        {
            "text" : "Completed - International Number",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - VOC",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - No Response from Customer",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - Acknowledgement msg.",
            "procedure" : null,
            "closable" : true
        },
        {
            "text" : "Completed - No Response from Customer",
            "procedure" : "629ca036fc0b34564e8eb9d8",
            "closable" : true
        },
        {
            "text" : "Completed-Support provided",
            "procedure" : "629ca036fc0b34564e8eb9d8",
            "closable" : true
        },
        {
            "text" : "Completed - No need support",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        },
        {
            "text" : "Completed - Solution by Bot (SVC)",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        },
        {
            "text" : "Completed - Solution by Bot (Brand Shop)",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        },
        {
            "text" : "Completed - Solution by Bot (Dealer)",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        },
        {
            "text" : "Completed - Solution by Bot (Installation)",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        },
        {
            "text" : "Completed - Solution by Bot (Repair registration)",
            "procedure" : "61c4ad12606ecf10f92610d2",
            "closable" : false
        }
    ],
    "description" : "Welcome and direct the customer",
    "active" : true,
    "repeat" : 2,
    "insightable" : true,
    "channels" : [
        "whatsapp360_2"
    ],
    "personalization" : {
        "legalScript" : "Disagree",
        "latlang" : "",
        "location" : "",
        "branch1" : "",
        "branch2" : "",
        "branch3" : "",
        "brandShopFilteredBranches" : "",
        "SVCFilteredBranches" : "",
        "SVCbranchChoosen" : "",
        "brandShopBranchChoosen" : "",
        "mainMenue" : ""
    },
    "priority" : 0,
    "defaultLang" : "ar-EG",
    "autoDetectLang" : true,
    "qc" : {
        "name" : "QC Concerns",
        "description" : "QC Concerns",
        "duration" : 30000,
        "avgResponseTime" : 30000,
        "clientWaitingTime" : 30000,
        "agentDelay" : 30000,
        "totalTime" : 30000,
        "duration_severity" : "low",
        "avgResponseTime_severity" : "low",
        "clientWaitingTime_severity" : "low",
        "agentDelay_severity" : "low",
        "totalTime_severity" : "low",
        "triggers" : [
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Greeting- Using The standard Greeting",
                "qcConcernMsg" : "Using The standard Greeting",
                "severity" : "Non Critical",
                "qcConcern" : "Greeting- Using The standard Greeting"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "System Navigation- Release Customer Information",
                "qcConcernMsg" : "Release Customer Information",
                "severity" : "Critical to Compliance",
                "related" : "System Navigation",
                "qcConcern" : "System Navigation- Release Customer Information"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "System Navigation -Customer Phone",
                "qcConcernMsg" : "Customer Phone",
                "severity" : "Critical to Customer",
                "related" : "System Navigation",
                "qcConcern" : "System Navigation -Customer Phone"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -Customer Name",
                "qcConcernMsg" : "Customer Name",
                "severity" : "critical for customer",
                "qcConcern" : "System Navigation -Customer Name"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -Address",
                "qcConcernMsg" : "Address",
                "severity" : "Critical to Customer",
                "qcConcern" : "System Navigation -Address"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -Update",
                "qcConcernMsg" : "Update",
                "severity" : "Critical to Customer",
                "qcConcern" : "System Navigation -Update"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -Product Information",
                "qcConcernMsg" : "Product Information",
                "severity" : "Critical to Customer",
                "qcConcern" : "System Navigation -Product Information"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -System Utilization ( action on GSFS)",
                "qcConcernMsg" : "System Utilization ( action on GSFS)",
                "severity" : "Critical to Business\\Critical to Customer",
                "qcConcern" : "System Navigation -System Utilization ( action on GSFS)"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -System Utilization ( system search)",
                "qcConcernMsg" : "System Utilization ( system search)",
                "severity" : "Non Critical",
                "qcConcern" : "System Navigation -System Utilization ( system search)"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "System Navigation",
                "name" : "System Navigation -Using Standard Format",
                "qcConcernMsg" : "Using Standard Format",
                "severity" : "Non Critical",
                "qcConcern" : "System Navigation -Using Standard Format"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Accurate Information and knowledge -Clarify Customer's Inquiry",
                "qcConcernMsg" : "Clarify Customer's Inquiry",
                "severity" : "Critical to Customer",
                "qcConcern" : "Accurate Information and knowledge -Clarify Customer's Inquiry",
                "related" : "Accurate Information and knowledge"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Accurate Information and knowledge -Share Digital Media File",
                "related" : "Accurate Information and knowledge",
                "qcConcernMsg" : "Share Digital Media File",
                "severity" : "Critical to Customer",
                "qcConcern" : "Accurate Information and knowledge -Share Digital Media File"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Accurate Information and knowledge -Troubleshooting",
                "related" : "Accurate Information and knowledge",
                "qcConcernMsg" : "Troubleshooting",
                "severity" : "Critical to Customer",
                "qcConcern" : "Accurate Information and knowledge -Troubleshooting"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Accurate Information and knowledge -Time Frame",
                "related" : "Accurate Information and knowledge",
                "qcConcernMsg" : "Time Frame",
                "severity" : "Critical to Customer",
                "qcConcern" : "Accurate Information and knowledge -Time Frame"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Professionalism -Empathy",
                "qcConcernMsg" : "Empathy",
                "severity" : "Non Critical",
                "qcConcern" : "Professionalism -Empathy"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Professionalism -Politeness",
                "related" : "Professionalism",
                "qcConcernMsg" : "Politeness",
                "severity" : "Non Critical",
                "qcConcern" : "Professionalism -Politeness"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Professionalism -Language",
                "related" : "Professionalism",
                "qcConcernMsg" : "Language",
                "severity" : "Non Critical",
                "qcConcern" : "Professionalism -Language"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Professionalism -Dead air",
                "related" : "Professionalism",
                "qcConcernMsg" : "Dead air",
                "severity" : "Non Critical",
                "qcConcern" : "Professionalism -Dead air"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Mishandling -Chat Scenario",
                "qcConcernMsg" : "Chat Scenario",
                "severity" : "Non Critical",
                "qcConcern" : "Mishandling -Chat Scenario"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Mishandling -Rude Bahavior",
                "related" : "Mishandling",
                "qcConcernMsg" : "Rude Bahavior",
                "severity" : "Critical to Customer",
                "qcConcern" : "Mishandling -Rude Bahavior"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Mishandling -Unwilling to help",
                "related" : "Mishandling",
                "qcConcernMsg" : "Unwilling to help",
                "severity" : "Critical to Customer",
                "qcConcern" : "Mishandling -Unwilling to help"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Following Company Policy -Image",
                "qcConcernMsg" : "Image",
                "severity" : "Critical to Bussiness",
                "qcConcern" : "Following Company Policy -Image"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "name" : "Call Closure -Paraphrasing",
                "qcConcernMsg" : "Paraphrasing",
                "severity" : "Non Critical",
                "qcConcern" : "Call Closure -Paraphrasing"
            },
            {
                "messages" : [

                ],
                "status" : "pending",
                "related" : "Call Closure",
                "name" : "Call Closure -Paraphrasing",
                "qcConcernMsg" : "Paraphrasing",
                "severity" : "Non Critical",
                "qcConcern" : "Call Closure -Paraphrasing"
            }
        ]
    },
    "sendAssignmentNotification" : false,
    "creationDate" : "2022-10-25T14:40:10.421+0000",
    "sendAssignmentNotificationRevisting" : false,
    "noWelcomeAssignMessageRevisit" : false,
    "updatedAt" : "2023-04-19T08:06:18.289+0000",
    "updatedBy" : "Support Ruba"
}