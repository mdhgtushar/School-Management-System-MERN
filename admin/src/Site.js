const site_settings = {
    "school": {
        "logo": "https://gafargaongovtcollege.edu.bd/images/gvlogo2.png",
        "title": {
            "en": "Z.M.INTERNATIONAL SCHOOL",
            "bn": "Z.M.INTERNATIONAL SCHOOL"
        },
        "short_description": {
            "en": "Kindergarden School"
        },
        "description": {
            "en": "desc"
        },
        "info": {
            "email": "email@gmail.com",
            "phone": "+8801302855453",
            "address": "SHAHID MINAR ROAD, NATUN BAZAR <br/>BIRAMPUR, DINAJPUR."
        },
        "adminstration": {
            "exams": ["Half Yearly", "Annual"],
            "sections": ["A", "B"],
            "classes": ["play", "narcary"],
            "years": [2022, 2023],
            "settings": {
                "play": {
                    "sections": ["A", "B"],
                    "exams": ["Half Yearly", "Annual"]
                }
            },
        }
    },
    "pages": {
        "home": {
            "view": true,
            "blocks": {
                "principal_speech": true,
                "featured_teacher_list": true,
                "features": true,
            }
        },
        "teachers": {
            "view": true
        },
        "students": {
            "view": true
        },
        "notice": {
            "view": true
        },
        "result": {
            "view": true
        }
    },
    "blocks": {
        "header": {},
        "principal_speech": {
            "title_1": {
                "en": "Welcome to our website"
            },
            "description_1": {
                "en": "this is short  <b>desc</b>"
            }
        },
        "featured_teacher_list": {
            "title_1": {
                "en": "Our valuable teachers"
            }
        },
        "features": {
            "title_1": {
                "en": "Our Mission and Vision"
            },
            "description_1": {
                "en": [
                    "Teacher: List, view, Create, Update, Delete",
                    "Student: List, view, Create, Update, Delete",
                    "Notice: List, view, Create, Update, Delete",
                    "Result: List, view, Create, Update, Delete",
                    "Class: List, view, Create, Update, Delete <br> Section: List, view, Create, Update, Delete <br>Subject: List, view, Create, Update, Delete"
                ]
            }
        }
    },
    "results": {
        "play": {
            "2022": {
                "Half Yearly": {
                    "1122": {
                        "bn": {
                            "mcq": 30,
                            "cq": 50,
                        },
                        "en": {
                            "cq": 80
                        }
                    },
                    "1123": {
                        "bn": {
                            "mcq": 30,
                            "cq": 50,
                        },
                        "en": {
                            "cq": 80
                        }
                    }
                },
                "Annual": {
                    "1122": {
                        "bn": {
                            "mcq": 30,
                            "cq": 50,
                        },
                        "en": {
                            "cq": 80
                        }
                    },
                    "1123": {
                        "bn": {
                            "mcq": 30,
                            "cq": 50,
                        },
                        "en": {
                            "cq": 80
                        }
                    }
                }
            }
        }
    }
}

export default site_settings;