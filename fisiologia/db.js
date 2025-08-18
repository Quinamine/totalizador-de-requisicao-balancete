"use strict"
const moz = {
    provincias: ["Cabo Delgado", "Niassa", "Nampula", "Zambezia", "Tete", "Manica", "Sofala", "Inhambane", "Gaza", "Maputo Província", "Maputo Cidade"],
    cabodelgado: {
        distritos: ["Ancuabe", "Balama", "Chiúre", "Ibo", "Macomia", "Mecufi", "Meluco", "Metuge", "Mocimboa da Praia", "Montepuez", "Mueda", "Muidumbe", "Namuno", "Nangade", "Palma", "Pemba", "Quissanga"],
        ancuabe: {
            us: ["CS Ancuabe", "CS Mariri", "CS Mesa", "CS Metoro", "CS Minhewene", "CS Nacuale", "CS Ngewe", "CS Ntutupue"],  
            codigos: ["01020206", "01020207","01020210","01020209", "01020211", "01020214", "01020213", "01020208"]
        },
        balama: {
            us: ["CS Balama", "CS Impiri", "CS Kuekue", "CS Mavala", "CS Metata", "CS Muape", "CS Murripa", "CS Ntete"],
            codigos: ["01020306","01020307","01020308","01020309","01020311","01020313","01020312","01020310"]
        },  
        chiure: {
            us: ["CS Catapua", "CS Chiúre Velho", "CS Marera",  "CS Mazeze", "CS M'mala", "CS Muege", "CS Nakoto",
            "CS Namogelia", "CS Ocua", "CS Samora Machel", "HD Chiúre", "PS Bilibiza"],
            codigos: ["01020409","01020407","01020417","01020410","01020412","01020414","01020415","01020413","01020411","01020404","01020406","01020408"]
        },
        ibo: {  
            us: ["CS Ibo", "CS Matemo", "CS Quirimba"],
            codigos: ["01020506","01020507","01020508"]
        }, 
        macomia: {
            us: ["CS Chai","CS Macomia", "CS Mucojo", "CS Naunde", "CS Nguida", "CS Quiterajo", "PS Piquewe"],
            codigos: ["01020614","01020612","01020607","01020610","01020609","01020608","01020611"]
        },
        mecufi:	{ 
            us: ["CS Mecufi", "CS Murrebue", "CS Natuco", "CS Ngoma"],
            codigos: ["01020706","01020707","01020708","01020705"]
        },
        meluco:	{ 
            us: ["CS Imbada", "CS Meluco","CS Minhanha","CS Muaguide","CS Raiva"],
            codigos: ["01020811","01020809","01020810","01020806","01020812"]
        },  
        metuge:	{ 
            us: ["CS Metuge", "CS Mieze", "CS Nacuta", "CS Nanlia", "CS Ntessa"],
            codigos: ["01021601","01021609","01021607","01021608","01021606"]
        },
        mocimboadapraia: { 
            us: ["CS Diaca", "CS Mangoma", "CS Mbau", "CS Milamba", "CS Nanduadua", "CS Quelimane", "HR Mocimboa da Praia"],
            codigos: ["01020908", "01020909", "01020907", "01020904", "01020903", "01020906", "01020901"]
        }, 
        montepuez: { 
            us: ["CS Linde", "CS Mapupulo", "CS Mirate", "CS Montepuez", "CS Nairoto", "CS Namanhumbiri", "CS Namueto", "CS Napai", "CS Niuhula", "CS Nropa ", "CS Ntapata", "HR Montepuez"],
            codigos: ["01021009", "01021014", "01021008", "01021015", "01021010", "01021011", "01021012", "", "01021016", "01021013", "01021007", "01021001"]
        },  
        mueda: { 
            us: ["CS Chapa", "CS Chilinde", "CS Chudi", "CS Mbuo", "CS M'peme", "CS Namatil", "CS Nandimba", "CS N'gapa", "HR Mueda", "PS Negomano"],
            codigos: ["01021109", "01021107", "01021105", "01021113", "01021108", "01021110", "01021114", "01021112", "01021106", "01021111"]
        },        
        muidumbe: { 
            us: ["CS Chitunda", "CS Miangalewa", "CS Miteda", "CS Muambula", "CS Muatide", "CS Namacande", "CS Ntchinga"], 
            codigos: ["01021207", "01021212", "01021209", "01021206", "01021208", "01021211", "01021213"]
        },      
        namuno:	{ 
            us: ["CS Hucula", "CS Machoca", "CS Meloco", "CS Namacaca", "CS Namrapa (EP2)", "CS Namuno", "CS Ncumpe", "CS Nicuita", "CS Papai"],
            codigos: ["01021307", "01021308", "01021309", "01021314", "01021310", "01021306", "01021311", "01021313", "01021312"]
        },  
        nangade: {
            us: ["CS Muhia", "CS Nangade", "CS Nkonga", "CS N'tamba", "CS N'toli"],
            codigos: ["01021410", "01021406", "01021409", "01021407", "01021408"]
        },    
        palma: {
            us: ["CS Maganja", "CS Muite", "CS Olumbe", "CS Palma", "CS Pundanhari", "CS Quionga"],
            codigos: ["01021509", "01021507", "01021508", "01021506", "01021510", "01021511"]
        },  
        pemba: {
            us: ["CS 18 de Outubro", "CS B. Cimento", "CS Cariacó", "CS Chuiba", "CS Eduardo Mondlane", "CS Ingonane", "CS Mahate", "CS Muxara", "CS Natite", "CS Paquite", "HP Pemba"],
            codigos: ["01020114", "01020109", "01020106", "01020151", "01020110", "01020107", "01020111", "01020112", "01020108", "01020113", "01020100"]
        },  
        quissanga: { 
            us: ["CS Bilibiza", "CS Cagembe", "CS Mahate", "CS Nacoba", "CS Namaluco", "CS Quissanga", "CS Tororo"],
            cogigos: ["01021710", "01021707", "01021708", "01021712", "01021709", "01021706", "01021711"]
        }
    },
    niassa: {
        distritos: ["Chimbunila", "Cuamba", "Lago", "Lichinga", "Majune", "Mandimba", "Marrupa", "Maúa", "Mavago", "Mecanhelas", "Mecula", "Metarica", "Muembe", "Ngaúma", "Nipepe", "Sanga"],
        chimbunila: {
            us: ["CS Chala", "CS Chimbunila", "CS Chinenge", "CS Cholue", "CS Colongo", "CS Lione", "CS Lumbe", "CS Machemba", "CS Machumane", "CS Mapaco", "CS Mussa", "CS Namuanica", "CS Uti"],
            codigos: ["01010406", "01010407", "01010401", "01010408", "01010416", "01010409", "01010402", "01010423", "01010417", "01010418", "01010414", "01010415", "01010403"]
        },
        cuamba: {
            us: ["CS Adine 3","CS Cuamba","CS Etatara","CS Lúrio","CS Macaue II","CS Malapa","CS Matias","CS Mepessene","CS Mepica","CS Meripo", "CS Mitucué","CS Muanamunepa","CS Mucuapa","CS Muitetere","CS Mujawa","CS Namicova","CS Namuntimbua","CS Napacala","CS Teteriane","CS Titimane", "HR Cuamba"],
            codigos: ["01010202", "01010216", "01010206", "01010217", "01010224", "01010207", "01010223", "01010228", "01010221", "01010225", "01010209", "01010220", "01010211", "01010212", "01010218", "01010213", "01010222", "01010215", "01010226", "01010214", "01010201"]
        },
        lago: {
            us: ["CS Bandeze", "CS Chia", "CS Chiuanga", "CS Cóbuè", "CS Liziunga", "CS Lupilichi", "CS Mandambuzi", "CS Maniamba", "CS Mechumua", "CS Melulucas", "CS Messumba", "CS Metangula", "CS Ngofi", "CS Ngôo", "CS Nkolongue", "CS Ntumba", "CS Tulo", "CS Wikihi"],
            codigos: ["01010313", "01010304", "01010320", "01010314", "01010317", "01010312", "01010321", "01010315", "01010316", "01010306", "01010307", "01010308", "01010309", "01010310", "01010323", "01010322", "01010319", "01010311"]
        },
        lichinga: {
            us: ["CS Assumane", "CS Chiuaula", "CS Chiulugo", "CS Lichinga", "CS Luiça", "CS Lulimile", "CS Magiga", "CS Malica", "CS Massenger", "CS Matama", "CS Matemangue", "CS Meponda", "CS Mitava", "CS Namacula", "CS Nbetazigone", "CS Sambula", "CS Utumuile", "HP Lichinga"],
            codigos: ["01010110", "01010108", "01010112", "01010106", "01010101", "01010111", "01010102", "01010109", "01010107", "01010104", "01010116", "01010105", "01010113", "01010115", "01010118", "01010114", "01010117", "01010100"]
        },
        majune: {
            us: ["CS Lisombe", "CS Mecualo", "CS Malanga", "CS Muaquia", "CS Nairubi", "CS Riate", "CS Metomone", "CS Luambala", "CS Lugenda", "CS Matucuta"],    
            codigos: ["01010512", "01010509", "01010507", "01010510", "01010508", "01010513", "01010514", "01010506", "01010511", "01010505"]
        },
        mandimba: {
            us: ["CS Chanica", "CS Lipuzia", "CS Lissiete", "CS Lussangasse", "CS Mandimba", "CS Meluluca", "CS Mepapa", "CS Mississi", "CS Mitande", "CS N'tembo", "HD Mandimba"],
            codigos: ["01010602", "01010607", "01010608", "01010615", "01010606", "01010609", "01010610", "01010611", "01010612", "01010613", "01010601"]
        },
        marrupa: {
            us: ["CS Cumela", "CS Marrangira", "CS Marrupa", "CS Mucuaiai", "CS Nungo", "CS Tumpue", "CS Yaranca", "HD Marrupa"],
            codigos: ["01010716", "01010707", "01010714", "01010715", "01010709", "01010711", "01010718", "01010706"]
        },

        maua: {
            us: ["CS Maiaca", "CS Maua", "CS Muapula", "CS Mugoma", "CS Muhoco", "CS Muloloua", "CS Queta"],
            codigos: ["01010806", "01010807", "01010809", "01010811", "01010813", "01010808", "01010822"]
        },
        
        mavago: {
            us: ["CS Mavago", "CS Milepa", "CS Nkalapa", "CS Nsawize"],
            codigos: ["01010906", "01010909", "01010907", "01010908"]
        },
        mecanhelas: {
            us: ["CS Candulo", "CS Caronga", "CS Chamba", "CS Chissaua", "CS Chiuta", "CS Entre-Lagos", "CS Kumulike", "CS Mecanhelas", "CS Mecomera", "CS Muhurune", "CS Nanhumba", "CS Naveia", "CS Sale"],
            codigos: ["01011019", "01011017", "01011015", "01011007", "01011008", "01011009", "01011021", "01011011", "01011010", "01011020", "01011018", "01011023", "01011013"]
        },

        mecula: {
            us: ["CS Gomba", "CS Lugenda", "CS Macalange", "CS Matondovela", "CS Mbamba", "CS Mecula", "CS Naulala", "CS Ntimbo"],
            codigos: ["01011106", "01011107", "01011108", "01011113", "01011109", "01011110", "01011111", "01011115"]
        },
        metarica: {
            us: ["CS Mecunica", "CS Mepuera", "CS Metarica", "CS Muhemela", "CS Nacumua", "CS Namicunde", "CS Niputa"],
            codigos: ["010112008", "01011212", "01011209", "01011206", "01011211", "01011210", "01011213"]
        },
        muembe: {       
            us: ["CS Chiconono", "CS Chuanjota", "CS Lutuezi", "CS Muembe", "CS Nzize"],
            codigos: ["01011306", "01011310", "01011307", "01011308", "01011309"]
        },
        ngauma: {
            us: ["CS Lupalane", "CS Chicoa", "CS Chiguaja", "CS Chissimbir", "CS Itepela", "CS Luelele", "CS Massangulo", "CS N'gauma"],
            codigos: ["01011408", "01011405", "01011412", "01011406", "01011407", "01011411", "01011409", "01011410"]
        },
        nipepe: {
            us: ["CS Cheia Cheia", "CS Manlia", "CS Metarica Lurio", "CS Muluco", "CS Napalave", "CS Natil", "CS Nipepe", "CS Nveriua", "CS Uachila"],
            codigos: ["01011509", "01011506", "01011513", "01011510", "01011508", "01011514", "01011507", "01011515", "01011502"]
        },
        sanga: {
            us: ["CS 7 De Setembro", "CS Chitula", "CS Licole", "CS Lumbiza", "CS Macaloge", "CS Madjedje (II Congresso)", "CS Malemia", "CS Maumbica", "CS Mbemba", "CS Nansinhenje", "CS Ngongote", "CS Unango-Velho"],
            codigos: ["01011606", "01011616", "01011607", "01011608", "01011609", "01011610", "01011611", "01011612", "01011613", "01011614", "01011618", "01011615"]
        }
    },
    nampula: {
        distritos: ["Angoche", "Erati", "Ilha de Moçambique", "Lalaua", "Larde", "Liupo", "Malema", "Meconta", "Mecuburi", "Memba", "Mogincual", "Mogovolas", "Moma", "Monapo", "Mossuril", "Muecate", "Murrupula", "Nacala-A-Velha", "Nacala Porto", "Nacaroa", "Nampula", "Rapale", "Ribaue"],
        angoche: {
            us: ["CS Aube", "CS Catamoio", "CS Gelo", "CS Inguri", "CS Josina Machel", "CS Malatane", "CS Mepapata", "CS Mirrepe", "CS Mirrere", "CS Mucual", "CS Nacopa", "CS Namaponda", "CS Namitoria", "CS Napruma", "CS Natir", "CS Quelelene", "CS Quilua", "CS Sangage", "HR Angoche"],
            codigos: ["01030210", "01030219", "01030286", "01030206", "01030218", "01030217", "01030211", "01030205", "01030212", "01030221", "01030213", "01030207", "01030208", "01030214", "01030209", "01030285", "01030215", "01030216", "01030201"]
        },
        erati: {
            us: ["CS Jacoco", "CS Kutua", "CS Mirrote", "CS Namiroa", "CS Nantoge", "CS Odinepa", "CS Samora Machel", "CS Tubruto (25 Junho)", "HR Alua", "HR Namapa"],
            codigos: ["01030314", "01030312", "01030307", "01030308", "01030309", "01030311", "01030310", "01030313", "01030306", "01030301"]
        },
        ilhademocambique: {
            us: ["CS Ilha de Moçambique", "CS Lumbo", "CS Macicate", "CS Muchela (Sangage)", "PS Ampara"],         
            codigos: ["01030406", "01030407", "01030410", "01030409", "01030408"]  
        },
        lalaua: {
            us: ["CS Lalaua", "CS Lúrio", "CS Meti", "CS Muesseleque", "CS Naquessa"],            
            codigos: ["01030506", "01030507", "01030508", "01030510", "01030509"]
        },
        larde: {                    
            us: ["CS Guarneia", "CS Larde", "CS Marrupanama", "CS Topuito PS Nambilane"],           
            codigos: ["01032202", "01032203", "01032204", "01032205", "01032206"] 
        },
        liupo: {
            us: ["CS Liupo", "CS Nakakana", "CS Quinga"],             
            codigos: ["01032302", "01032303", "01032304"]  
        },
        malema: {
            us: ["CS Chuhulo", "CS Malema", "CS Murralelo", "CS Murripa", "CS Murumbo", "CS Mutuali", "CS Nakata", "CS Nataleia PS", "Cunvarre PS Nioce"],    
            codigos: ["01030608", "01030606", "01030610", "01030611", "01030614", "01030607", "01030613", "01030612", "01030609", "01030615"]
        },
        meconta: {
            us: ["CS Corrane", "CS Japir", "CS Meconta", "CS Mecua", "CS Nacavala", "CS Namialo", "CS Tetererene"],         
            codigos: ["01030708", "01030711", "01030707", "01030712", "01030710", "01030706", "01030709"] 
        },
        mecuburi: {
            us: ["CS Issipe", "CS Malithe", "CS Mecuburi", "CS Milhana", "CS Momane", "CS Mualua", "CS Muite", "CS Nahipa", "CS Namina", "CS Napai", "CS Popué", "CS Ratane", "PS Unidade Moçambicana"],
            codigos: ["01030814", "01030815", "01030806", "01030807", "01030809", "01030816", "01030810", "01030817", "01030808", "01030812", "01030813", "01030818", "01030819"] 
        },
        memba: {                 
            us: ["CS Baixo Pinda", "CS Cava", "CS Chipene", "CS Geba", "CS Mazua", "CS Memba", "CS Namahaca", "CS Namatapa", "CS Pavala", "PS Lúrio", "PS Napila", "PS Simuco"],
            codigos: ["01030916", "01030913", "01030907", "01030914", "01030910", "01030906", "01030908", "01030915", "01030917", "01030909", "01030911", "01030912"] 
        },
        mogincual: {
            us: ["CS Mepeone (NAKIRA)", "CS Namige", "CS Quixaxe", "CS Radanamaga", "CS Xa-Momade", "CS Xa-Selemane"],           
            codigos: ["01031011", "01031007", "01031009", "01031012", "01031014", "01031013"]
        },
        mogovolas: {
            us: ["CS Calipo", "CS Iuluti", "CS Mecutamala", "CS Muatua", "CS Murrirrimue", "CS Nametil", "CS Nanhupo Rio"],          
            codigos: ["01031107", "01031108", "01031111", "01031109", "01031112", "01031106", "01031110"] 
        },
        moma: {
            us: ["CS Briganha", "CS Chalaua", "CS Ligonha (Mucoroge)", "CS Mavuco", "CS Metil", "CS Micane", "CS Pilivili", "CS Piqueira", "CS Savara", "CS Uala", "HD Moma"],      
            codigos: ["01031208", "01031207", "01031211", "01031219", "01031213", "01031218", "01031215", "01031209", "01031216", "01031217", "01031206"] 
        },
        monapo: {
            us: ["CS Carapira", "CS Chihiri", "CS Itocolo", "Cs Jagaia", "CS Mecuco", "CS Monapo", "CS Monapo Rio", "CS Muatuca", "CS Mucujua", "CS Murruto", "CS Napala", "CS Natete", "CS Netia", "CS Ramiane", "HD Monapo", "PS Maserpane", "PS Metocheria"],
            codigos: ["01031307", "01031312", "01031309", "01031313", "01031314", "01031306", "01031318", "01031310", "01031319", "01031321", "01031320", "01031308", "01031311", "01031317", "01031300", "01031315", "01031316"]
        },
        mossuril: {
            us: ["CS Cabeceira Pequena", "CS Chocas Mar", "CS Lunga", "CS Matibane", "CS Mossuril", "CS Muaualo", "CS Nacucha", "CS Namige", "CS Namitatare", "PS Cabeceira Grande"],
            codigos: ["01031413", "01031409", "01031410", "01031411", "01031406", "01031439", "01031407", "01031412", "01031415", "01031408"]
        },
        muecate: {
            us: ["CS Chereque", "CS Chinamane", "CS Gracio", "CS Imala", "CS Kavula", "CS Minicane", "CS Muculuone", "CS Muecate", "CS Namahia", "CS Namina-Rio", "CS Napala"],    
            codigos: ["01031514", "01031509", "01031512", "01031507", "01031513", "01031516", "01031510", "01031506", "01031508","01031505", "01031511"] 
        },
        murrupula: {
            us: ["CS Chinga", "CS Gazuzu", "CS Murrupula", "CS Nihessiue", "CS Tiponha", "CS Umuato"],
            codigos: ["01031608", "01031610","01031606","01031607", "01031611", "01031609"]
        },
        nacalaavelha: {
            us: ["CS Barragem", "CS Ger-Ger (Covo)", "CS Mueria", "CS Nacala-A-Velha", "CS Namalala", "CS Salina"],           
            codigos: ["01031808", "01031856", "01031807", "01031806", "01031811", "01031809"]
        },
        nacalaporto: {
            us: ["CS Akumi", "CS C.A.M.I.N.A", "CS CFM", "CS Cimentos", "CS Mahelene", "CS Murrupulane", "CS Nacala Porto", "CS Naherengue", "CS Ontupaia", "CS Quissimajulo", "HD Nacala Porto", "PS A.D.P.P. Muzuane", "PS CIFE", "PS Mathapue"],
            codigos: ["01031715", "01031714", "01031711", "01031712", "01031716", "01031708", "01031700", "01031709", "01031717", "01031707", "01031701", "01031710", "01031713", "01031706"] 
        },
        nacaroa: {
            us: ["CS Halaca", "CS Mahetha", "CS Muchico", "CS Nacaroa", "CS Nachere", "CS Nahadje", "CS Saua-Saua"],
            codigos: ["01031903", "0103191", "01031910", "01031906", "01031907", "01031909", "01031908"]
        },
        nampula: {
            us: ["CS 1 de Maio", "CS 25 de Setembro", "CS Anchilo", "CS Maratene", "CS Mental", "CS Mucova", "CS Mucuache", "CS Muhala Expansão", "CS Mutavarex", "CS Naholoco", "CS Namachilo (MOMALA)", "CS Namiconha", "CS Namicopo", "CS Namiepe", "CS Namutequeliua", "CS Napipine", "CS Niarro", "CS O.T.M.", "CS Penitenciária", "CS Saua Saua", "HC Nampula", "HG Marrere", "HM Nampula", "PS Anexo (Psiquiátrico)", "PS Mutauanha"],
            codigos: ["01030108", "01030106", "01032007", "01032019", "01030116", "01032021", "01030122", "01030117", "01030120", "01032013", "01032014", "01032015", "01030113", "01030110", "01030112","01030109", "01030121", "01030114", "01030119", "01032020", "", "01030107", "01030102", "01030110", "01030111"]
        },
        rapale: {
            us: ["CS Caramaja", "CS Muleheia", "CS Mutive", "CS Mutovo", "CS Namaita", "CS Namucaua", "CS Natoa", "CS Rapale"],
            codigos: ["01032009", "01032022", "01032011", "01032012", "01032008", "01032017", "01032018", "01032006"]   
        }, 
        ribaue: {
            us: ["PS ESC. BAS. AGRÁRIA", "CS Chica", "CS Cunle", "CS Lapala Estação", "CS Lapala Monapo", "CS Namiconha", "CS Riane", "HR Ribaue", "LPS Mecuasse"],
            codigos: ["01032112", "01032107", "01032113", "01032108", "01032106", "01032110", "01032111", "01032101", "01032109"]
        }
    },
    zambezia: {
        distritos: ["Alto Molócuè", "Chinde", "Derre", "Gilé", "Gurué", "Inhassunge", "ILE", "Luabo", "Lugela", "Maganja da Costa", "Milange", "Mocuba", "Mocubela", "Molumbo", "Mopeia", "Morrumbala", "Mulevala", "Namacurra", "Namarroi", "Nicoadala", "Pebane", "Quelimane"],
        altoMolocue: { 
            us: ["CS Alto Molócuè", "CS Bonifácio Groveta", "CS Caiaia", "CS Chapala", "CS Cololo", "CS Ecole", "CS Malua", "CS Mouia", "CS Mugema", "CS Mutala", "CS Nacuaca", "CS Nauela", "CS Nivava", "CS Novanana", "HD Alto Molócuè", "PS Nimala"],
            codigos: ["01040206", "01040299", "01040207", "01040208", "01040236", "01040216", "01040265", "01040211", "01040215", "01040212", "01040255", "01040213", "01040214", "01040237", "01040200", "01040256"]
        },
        chinde: {
            us: ["CS Chinde - Sede", "CS Jorge", "CS Madal", "CS Matilde", "CS Micaune", "PS Centro Educacional", "PS Mitange"],
            codigos: ["01040307", "01040313", "01040309", "01040310", "01040311", "01040316", "01040312"]
        },
        derre: {
            us: ["CS Derre", "CS Guerissa", "CS Machindo"],
            codigos: ["01041803", "01041804", "01041805"]
        },
        gile: {
            us: ["CS Alto Ligonha", "CS Intxotxa", "CS Kayane", "CS Mamala", "CS Moneia", "CS Muiane", "CS Mutequela", "CS Pury", "CS Uape", "HD Gilé", "PS Namuaca"],
            codigos: ["01040406", "01040405", "01040439", "01040455", "01040408", "01040409", "01040404", "01040462", "01040410", "01040407", "01040437"]
        },
        gurue: {
            us: ["CS Ruace", "HD Gurué", "CS Invinha", "CS Mepuagiua", "CS Gurué", "CS Macuarro", "CS Serra", "CS Lioma", "PS Nintulo", "CS Muagiua", "CS UP 4", "CS Tetete", "CS UP 10"],
            codigos: ["01040509", "01040500", "01040516", "01040508", "01040506", "01040517", "01040510", "01040507", "01040563", "01040514", "01040513", "01040511", "01040512"]
        },
        inhassunge: { 
            us: ["CS Bingagira", "CS Chirimane", "CS Gonhane", "CS Ilova", "CS Inhassunge-Sede", "CS Olinda", "CS Palane-Mucula"],
            codigos: ["01040711", "01040706", "01040707", "01040712", "01040708", "01040710", "01040713"]
        },
        ile: {
            us: ["CS Curruane", "CS ILE-Sede", "CS Massira", "CS Mucuaba", "CS Mulequela", "CS Mungulama", "CS Namanda", "CS Niboia", "CS Nipiode", "CS Phalane", "CS Socone", "CS Ualasse"],
            codigos: ["01040655", "01040601", "01040637", "01040667", "01040610", "01040608", "01040661", "01040636", "01040612", "01040607", "01040613", "01040665"]
        },
        luabo: {
            us: ["CS Ilha Salia", "CS Luabo", "CS Marcação", "CS Socovinho", "PS Chimbazo"],
            codigo: ["01041903", "01041902", "01041906", "01041905", "01041904"]
        },
        lugela: {
            us: ["CS Erurune", "CS Limbue", "CS Lugela-Sede", "CS Mubanama", "CS Mulide", "CS Mungulune", "CS Munhamade", "CS Namagoa", "CS Puthine", "CS Tacuane", "PS Mucubi", "PS Mudedereia", "PS Nigau"],
            codigos: ["01040809", "01040810", "01040806", "01040811", "01040836", "01040812", "01040807", "01040808", "01040814", "01040815", "01040816", "01040838", "01040813"]
        },
        maganjadacosta: {
            us: ["CS Alto Mutola", "CS Cabuir", "CS Cariua", "CS Mabala", "CS Maganja da Costa", "CS Mapira", "CS Muloa", "CS Muzo", "CS Nante", "PS Moneia", "PS Mugaua", "PS Vila Valdez"], 
            codigos: ["01040916", "01040902", "01040913", "01040908", "01040906", "01040936", "01040909", "01040961", "01040911", "01040937", "01040919", "01040915"]
        },
        milange: {
            us: ["CS Carico", "CS Dachudua", "CS Dulanha", "CS Grugunha", "CS Liciro", "CS Majaua", "CS Milange", "CS Mongue", "CS Muanhambo", "CS Sabelua", "CS Tengua", "HD Milange", "PS Nambuzi", "PS Vulalo"],
            codigos: ["01041007", "01041016", "01041011", "01041018", "01041014", "01041010", "01041006", "01041015", "01041004", "01041067", "01041012", "01041000", "01041017", "01041013"] 
        },
        mocuba: {
            us: ["CS 16 de Junho", "CS Alto Benfica", "CS Caiave", "CS Chimbua", "CS Intome", "CS Magogodo", "CS Mataia", "CS Mocuba", "CS Mocuba - Sisal", "CS Muanaco", "CS Muaquiua", "CS Mugeba", "CS Muloe", "CS Munhiba", "CS Namabida", "CS Namagoa", "CS Namanjavira", "CS Nhaluanda", "CS P. Ucerra", "CS Pedreira", "CS Samora Machel", "HD Mocuba"],
            codigos: ["01041137", "01041114", "01041110", "01041155", "01041113", "01041119", "01041122", "01041106", "01041107", "01041136", "01041109", "01041108", "01041112", "01041117", "01041156", "01041158", "01041116", "01041118", "01041111", "01041121", "01041120", "01041100"]
        },
        mocubela: {
            us: ["CS Gurai", "CS Ilha de Idugo", "CS Maneia", "CS Mocubela", "CS Naico", "CS Tapata", "PS Bajone", "PS Missal"],
            codigos: ["01042003", "01042004", "01042005", "01042006", "01042007", "01042010", "01042008", "01042009"]
        },
        molumbo: {
            us: ["CS Corromana", "CS Malua", "CS Molumbo", "CS Namucumua", "CS Nantuto", "PS Cazimbe"],
            codigos: ["01042105", "01042107", "01042104", "01042108", "01042106", "01042109"]
        },
        mopeia: {
            us: ["CS 8 de Março", "CS Catale", "CS Chimuara", "CS Gulamo", "CS Lua-Lua", "CS Mopeia-Sede", "CS Mungane", "CS Noere", "CS Nzanza", "CS Posto Campo", "CS Sangalaza", "PS Nhacatundo"],
            codigos: ["01041236", "01041237", "01041206", "01041207", "01041208", "01041209", "01041202", "01041213", "01041214", "01041210", "01041203", "01041211"]
        },
        morrumbala: {
            us: ["CS Balicholo", "CS Boroma", "CS Chilomo", "CS Chire", "CS Cumbapo", "CS Djasse", "CS Fabrica", "CS Gaute", "CS Goro", "CS Mecaula", "CS Megaza", "CS Mepinha", "CS Morrumbala", "CS Muandiua", "CS Muerra", "CS Mureremba", "CS Pinda", "CS Reis", "CS Sabe", "HD Morrumbala"],
            codigos: ["01041321", "01041307", "01041363", "01041315", "01041308", "01041317", "01041358", "01041316", "01041320", "01041359", "01041311", "01041312", "01041306", "01041340", "01041362", "01041322", "01041313", "01041325", "01041314", "01041336"]
        },
        mulevala: {
            us: ["CS Chiraco", "CS Jajo", "CS Marropino", "CS Morrua", "CS Mulevala", "PS Tebo"],
            codigos: ["01042204", "01042206", "01042207", "01042208", "01042203", "01042205"]
        },
        namacurra: {
            us: ["CS Lugela", "CS Macuse", "CS Malei", "CS Mbawa", "CS Mexixine", "CS Muceliua", "CS Muebele", "CS Mugubia", "CS Namacurra-Sede", "PS Furquia", "PS Mutange", "PS Naciaia"],
            codigos: ["01041419", "01041408", "01041409", "01041414", "01041410", "01041417", "01041415", "01041418", "01041406", "01041407", "01041416", "01041411"]
        },
        namarroi: {
            us: ["CS Lipale", "CS Marea", "CS Mudine", "CS Mutatala", "CS Mutepua", "CS Namarroi-Sede", "CS Regone", "CS Rumala"],
            codigos: ["01041510", "01041509", "01041512", "01041511", "01041508", "01041507", "01041506", "01041513"]
        },
        nicoadala: {
            us: ["CS Amorro", "CS Ilalane", "CS Licuar", "CS Namacata", "CS Nicoadala-Sede", "CS Quinta Girassol", "PS Domela", "PS Marrongane"], 
            codigos: ["01041618", "01041606", "01041609", "01041613", "01041614", "01041617", "01041620", "01041612"]
        },
        pebane: {
            us: ["CS 7 de Abril", "CS Alto Maganha", "CS Impaca", "CS Magiga", "CS Malema", "CS Mihecue", "CS Mulela", "CS Muligode", "CS Naburi", "CS Pebane-Sede", "CS Pele-Pele", "CS Tomea", "CS Txalalane", "PS Cutal"],
            codigos: ["01041715", "01041737", "01041716", "01041708", "01041709", "01041710", "01041711", "01041712", "01041713", "01041706", "01041757", "01041717", "01041736", "01041707"]
        },
        quelimane: {
            us: ["CS 17 De Setembro", "CS 24 de Julho", "CS 4 de Dezembro", "CS Chabeco", "CS Coalane", "CS Estação Malanha", "CS Incidua", "CS Inhangulue", "CS Ionge", "CS Madal", "CS Maquival Sede", "CS Maquival-Rio", "CS Micajune", "CS Namuinho", "CS Sangarivera", "CS Saude Santo Egidio", "CS Varela", "HC de Quelimane", "HP Quelimane", "PS Cadeia Civil", "PS Zalala Mar"],
            codigos: ["01040106", "01040107", "01040109", "01040114", "01040108", "01040119", "01040117", "01040125", "01040120", "01040121", "01040122", "01040123", "01040116", "01040111", "01040112", "0104115", "01040124", "01040101", "01040100", "01040110", "01040118"]
        }
    },

    tete: {
        distritos: ["Angónia", "Cahora Bassa", "Changara", "Chifunde", "Chiuta", "Doa", "Macanga", "Mágoè", "Marara", "Marávia", "Moatize", "Mutarara", "Tete", "Tsangano", "Zumbo"],
        angonia: {
            us: ["CS Calomue", "CS Catondo", "CS Chia", "CS Chimuala", "CS Domue", "CS Lifidzi", "CS Mpandula", "CS Mpenha", "CS Mulanguene", "CS Ntsendeza", "CS Seze", "CS Ulongue", "CS Vila Velha", "HR Ulongue"],
    	    codigos: ["01050203", "01050216", "01050204", "01050208", "01050207", "01050210", "01050214", "01050211", "01050218", "01050217", "01050212", "01050215", "01050213", "01050200"]
        },
        cahoraBassa: {
            us: ["CS Chinhanda", "CS Chintholo", "CS Chipalapala", "CS Chirodze-Ponte", "CS Chitima", "CS Maroeira", "CS Nhacapiriril", "CS Nhambado", "CS Songo", "HR Songo"],
            codigos: ["01050306", "01050313", "01050314", "01050309", "01050308", "01050312", "01050310", "01050311", "01050202", "01050301"]
        },
        changara: {
            us: ["CS Changara", "CS Chioco", "CS Chipembere", "CS Dzunga", "CS Goba", "CS Mazoe Ponte", "CS M'palamabue", "CS M'saua", "CS Nachinanga", "CS Ntemangau"],
            codigos: ["01050406", "01050407", "01050408", "01050409", "01050410", "01050411", "01050416", "01050415", "01050412", "01050413"]
        },
        chifunde: {
            us: ["CS Bolimo", "CS Chifunde", "CS Luia", "CS Nkamande", "CS Nkantha", "CS Thequesse", "CS Tsadzo", "CS Vila Mualadzi"],
            codigos: ["01051117", "01050506", "01050507", "01050512", "01050511", "01050509", "01050508", "01050510"]
        },
        chiuta: {   
            us: ["CS Cazula", "CS Kaunda", "CS Manje", "CS Matenje", "CS Mavudzi-Ponte"],
            codigos: ["01050606", "01050607", "01050608", "01050605", "01050609"]
        },
        doa: {
            us: ["CS Ancuaze", "CS Chueza", "CS Doa", "CS Fortuna"], 
            codigos: ["01051402", "01051400", "01051403", "01051409"]
        },
        macanga: {
            us: ["CS Bawe", "CS Campala", "CS Chidzolomondo", "CS Furancungo", "CS Gandali", "CS Miwanga", "CS Namadende", "CS Nchoncho", "CS Walota"], 
            codigos: ["01050713", "01050711", "01050706", "01050701", "01050705", "01050709", "01050708", "01050710", "01050714"]
        },
        magoe: {
            us: ["CS Cazindira", "CS Chinthopo", "CS Chitete", "CS Daque", "CS Luia", "CS Magoe", "CS Mucumbura", "CS Mussenguezi"],
            codigos: ["01050806", "01050807", "01050808", "01050809", "01050805", "01050810", "01050811", "01050812"]
        },
        marara: {
            us: ["CS Boroma", "CS Cachembe", "CS Marara", "CS Matambo", "CS Mufa Caconde"],
            codigos: ["01051505", "01051507", "01051503", "01051504", "01051508"]
        },
        maravia: {
            US: ["CS Chipera", "CS Chiputo", "CS Fingoe", "CS Kassuende", "CS Maloera", "CS Uncanha"], 
            codigos: ["01050998", "01050906", "01050907", "01050910", "01050908", "01050909"]
        },
        moatize: {
            us: ["CS CFM", "CS 25 de Setembro", "CS Benga", "CS Cambulatsitsi", "CS Caphirizange", "CS Cateme", "CS Mameme II", "CS Micunga", "CS Moatize", "CS Mphandzu", "CS Mualazi", "CS Ncondezi", "CS Nkhanga", "CS Samoa", "CS Zobue"],
            codigos: ["01051013", "01051018", "01051009", "01051010", "01051011", "01051017", "01051007", "01051015", "01051008", "01051004", "01051014", "01051003", "01051012", "01051016", "01051006"]
        },
        mutarara: {
            us: ["CS Bawe", "CS Charre", "CS Inhangoma", "CS Jardim", "CS Mutarara", "CS Mutarara Velha", "CS Nhapale", "CS Sinjal", "CS Traquino", "CS Vila Nova da Fronteira", "HR Mutarara"],
            codigos: ["01051105", "01051109", "01051111", "01051112", "01051106", "01051113", "01051116", "01051114", "01051107", "01051115", "01051101"]
        },
        tete: {
            us: ["CS Canjanda", "CS Degue", "CS Mpadue", "CS Mufa", "CS Nº 1 - Bairro Magaia", "CS Nº 2 - Bairro Matundo", "CS Nº 3 - Bairro Manyanga", "CS Nº 4 - Bairro Muthemba", "HP Tete", "PS Base Aérea", "PS Cadeia"],
            codigos: ["01050112", "01050119", "01050120", "01051506", "01050109", "01050110", "01050111", "01050106", "01050100", "01050122", "01050118"]
        },
        tsangano: {
            us: ["CS Banga", "CS Chinvano", "CS Fonte Boa", "CS Kalipale", "CS Maconge", "CS Ntengombalame", "CS Tsangano"],
            codigos: ["01050414", "01051210", "01050209", "01051206", "01051209", "01051207", "01051208"]
        },
        zumbo: {
            us: ["CS Chissavo", "CS Minga", "CS Mphangula", "CS Mugangadze", "CS Muze", "CS Tongue", "CS Zambue", "HD Zumbo"], 
            codigos: ["01051315", "01051305", "01051306", "01051312", "01051307", "01051310", "01051308", "01051309"]
        }
    },
    manica: {
        distritos: ["Bárue", "Chimoio", "Gondola", "Guro", "Macate", "Machaze", "Macossa", "Manica", "Mossurize", "Sussundenga", "Tambara", "Vanduzi"],
        barue: {
            us: ["CS Barauro", "CS Cagore", "CS Catandica", "CS Chuala", "CS Cruz. Macossa", "CS Honde", "CS Munene", "CS Mussianharo", "CS Nhampassa", "CS Nhassacara", "CS Nhazonia", "CS Phanze", "CS Serra Choa", "HD Catandica"],
            codigos: ["01060214", "01060207", "01060215", "01060216", "01060206", "01060208", "01060218", "01060217", "01060210", "01060211", "01060209", "01060212", "01060213", "01060200"]
        },
        chimoio: {
            us: ["CS 1º de Maio", "CS 7 De Abril", "CS Chissui", "CS Eduardo Mondlane", "CS Nhamaonha", "CS Vila Nova", "HP Chimoio"],
            codigos: ["01060107", "01060110", "01060109", "01060106", "01060108", "01060112", "01060100"]
        },
        gondola: {
            us: ["CS Amatongas", "CS Chipindaumwe", "CS F. Manhanga", "CS Inchope", "CS Josina Machel", "CS Muda Serração", "CS Mutocoma", "HD Gondola"],
            codigos: ["01060307", "01060306", "01060319", "01060309", "01060305", "01060313", "01060355", "01060300"]
        },
        guro: {
            us: ["CS Bunga", "CS Chivuli", "CS Guro - Sede", "CS Mandie", "CS Massangano", "CS Mungari", "CS Nhamassonge", "CS Nhansana", "CS Nhaphungo", "CS Tchetcha", "CS Thanda"],
            codigos: ["01060406", "01060407", "01060408", "01060409", "01060411", "01060410", "01060412", "01060413", "01060103", "01060414", "01060415"]
        },
        macate: {
            us: ["CS Catize", "CS Chicanga", "CS Chinete", "CS Macate", "CS Marera", "CS Zembe Centro"],
            codigos: ["01061207", "01061206", "01061208", "01061203", "01061204", "01061205"]
        },
        machaze: {
            us: ["CS Bassane", "CS Chipopopo", "CS Chipudji", "CS Chitobe", "CS Mavende", "CS Mazwissanga", "CS Mutefo", "CS Sambassoca", "CS Save", "CS Thimbi - Thimbi"],
            codigos: ["01060506", "01060507", "01060508", "01060509", "01060596", "01060510", "01060513", "01060512", "01060511", "01060597"]
        },
        macossa: {
            us: ["CS Dunda", "CS Macossa", "CS Massangazi", "CS Nguawala", "CS Nhamagua"],
            codigos: ["01060610", "01060606", "01060607", "01060609", "01060608"]
        },
        manica: {
            us: ["CS 4º Congresso", "CS Chazuca", "CS Chicamba", "CS Chinhagore", "CS Chinhambuzi", "CS Chitunga", "CS Jecua Missão", "CS Machipanda", "CS Mavonde", "CS Messica", "CS Mundonguara", "CS Nhamaxato", "CS Penhalonga", "CS Zonue Tabaco", "HD Manica", "PS Guindingue", "PS Munene"], 
            codigos: ["01060798", "01060794", "01060707", "01060795", "01060709", "01060710", "01060711", "01060712", "01060713", "01060714", "01060715", "01060718", "01060719", "01060724", "01060706", "01060721", "01060716"]
        },
        mossurize: {
            us: ["CS Chaiva", "CS Chitsama", "CS Chiurairue", "CS Dacata", "CS Espungabera", "CS Garagua", "CS Goi-Goi", "CS Gunhe", "CS Macuo", "CS Mude", "CS Mupengo"],
            codigos: ["01060813", "01060816", "01060807", "01060808", "01060806", "01060814", "01060841", "01060812", "01060811", "01060809", "01060810"]
        },
        sussundenga: {
            us: ["CS Bunga", "CS Darue", "CS Dombe", "CS Ifloma", "CS Mavuzi", "CS Muhoa", "CS Munhinga", "CS Mutarara", "CS Nhambamba", "CS Rotanda", "CS Rupisse", "CS Sembezea", "CS Sussundenga"],
            codigos: ["01060994", "01060995", "01060911", "01060918", "01060912", "01060919", "01060908", "01060914", "01060909", "01060910", "01060917", "01060913", "01060906"]
        },
        tambara: {
            us: ["CS Búzua", "CS Campange", "CS Miteme", "CS Nhacafula", "CS Nhacalapho", "CS Nhacolo", "CS Sabeta"], 
            codigos: ["01061006", "01061011", "01061012", "01061007", "01061010", "01061008", "01061009"]
        },
        vanduzi: {
            us: ["CS Chigodole", "CS Dangalenga", "CS IAC", "CS Manaoquera", "CS Matsinho", "CS Mucombedzi", "CS Pungue Sul", "CS Vanduzi"], 
            codigos: ["01061103", "01061107", "01061108", "01061105", "01061104", "01060727", "01061106", "01061102"]
        }
    },
    sofala: {
        distritos: ["Beira", "Búzi", "Caia", "Chibarava", "Chemba", "Cheringoma", "Dondo", "Gorongosa", "Machanga", "Maríngue", "Marromeu", "Muanza", "Nhamatanda"],
        beira: {
            us: ["CS Munhava", "CS Marrocanhe", "CS Nhangau", "HC BEIRA", "CS Ponta Gea", "CS M. Mascarenha", "CS Macurrungo", "CS Nhaconjo", "CS Ceramica", "PS Matadouro", "CS de Inhamizua", "CS Chota", "CS Chingussura", "CS Manga-Loforte", "PS Chamba"],
            codigos: ["01070106", "01070105", "01070116", "01070100", "01070109", "01070114", "01070113", "01070107", "01070110", "01070115", "01070103", "01070112", "01070108", "01070104", "01070111"]
        },
        buzi: {
            us: ["HR  BUZI", "CS Ampara", "CS Bandua", "CS Barada", "CS Bura", "CS Chissinguana", "CS Danga", "CS Estaquinha", "CS Grudja", "CS Guara-Guara", "CS Inhamichindo", "CS Inhavininga", "CS Marombe", "PS Rio Buzi"],
            codigos: ["01070200", "01070207", "01070206", "01070209", "01070210", "01070211", "01070220", "01070212", "01070216", "01070217", "01070208", "01070267", "01070215", "01070214"]
        },
        caia: {
            us: ["CS Chatala", "CS Deve", "CS Kapassene", "CS Licoma", "CS Murraça", "CS Murrema", "CS Ndoro", "CS Nhambalo", "CS Ntopa", "CS Sena", "HD CAIA", "PS Nhamatanda"],
            codigos: ["01070356", "01070310", "01070314", "01070305", "01070308", "01070307", "01070311", "01070315", "01070309", "01070312", "01070306", "01070320"]
        },
        chibarava: {
            us: ["CS Chibabava-Sede", "CS Chinhica", "CS Goonda", "CS Hoode", "CS Mangunde", "CS Mucheve", "CS Muligue", "CS Mutindire", "CS Nhango", "CS Panja", "CS Revue", "CS Tronga", "HR Muxungue", "PS de Massaquessa", "PS Esperança-Berta"],
            codigos: ["01070606", "01070617", "01070616", "01070609", "01070615", "01070614", "01070610", "01070604", "01070608", "01070611", "01070613", "01070612", "01070600", "01070605", "01070607"]
        },
        chemba: {
            us: ["CS Mulima", "CS Goe", "CS Senhabuzua", "CS 3 Fevereiro", "CS Catulene", "CS Cado", "CS Chemba-Sede", "PS Jequecene", "CS Chiramba"], 
            codigos: ["01070406", "01070412", "01070457", "01070408", "01070439", "01070459", "01070410", "01070403", "01070407"]
        },
        cheringoma: {
            us: ["CS Chite", "CS Inhaminga", "CS Inhamitanga", "CS Maciamboza", "CS Mazamba", "CS Nhataca", "CS Pungue"],
    	    codigos: ["01070508", "01070500", "01070511", "01070510", "01070509", "01070507", "01070506"],
        },
        dondo: {
            us: ["CS Bloco Nove", "CS Canhandula", "CS Chibuabuabua", "CS Chinamacondo", "CS Dondo", "CS Macharote", "CS Mafambisse", "CS Mutua", "CS Samora Machel", "CS Savane", "CS Sengo", "CS Thundane", "PS Igreja Baptista", "PS Lusalite", "PS Nhamainga"], 
            codigos: ["01070717", "01070716", "01070710", "01070709", "01070706", "01070714", "01070707", "01070713", "01070777", "01070711", "01070720", "01070703", "01070719", "01070715", "01070712"]
        },
        gorongosa: {
            us: ["CS Canda", "CS Casa Banana", "CS Cudzo", "CS Gorongoza-Sede", "CS Mucodza", "CS Muera", "CS Nhambondo", "CS Nhamissongora", "CS Piro", "CS Pungue", "CS Tsiquir", "CS Vunduzi", "PS Chitengo", "PS Domba", "PS Jutchenge", "PS Nhataca", "PS Tazaronda"],
            codigos: ["01070812", "01070818", "01070821", "01070806", "01070816", "01070809", "01070804", "01070811", "01070807", "01070815", "01070810", "01070814", "01070817", "01070813", "01070808", "01070819", "01070820"]
        },
        machanga: {
            us: ["CS Beia-Peia", "CS Buene", "CS Chiloane", "CS Chinhuque", "CS Divine", "CS Inharingue", "CS Javane", "CS Machanga", "CS Maropanhe", "CS Nhamachire"],
            codigos: ["01070905", "01070911", "01070912", "01070910", "01070909", "01070907", "01070901", "01070908", "01070906", "01070913"]
        },
        maringue: {         
    	    us: ["CS Canxixe", "CS Phango", "CS Maringue-Sede", "CS Nhamacala", "CS Senga Senga", "CS Chionde", "CS Subue", "CS Gumbalatsai", "CS de Palame"], 
            codigos: ["01071010", "01071005", "01071009", "01071008", "01071007", "01071014", "01071006", "01071011", "01071012"]
        },
        marromeu: {
            us: ["CS Amambos", "CS Chueza", "CS Chupanga", "CS de Nhansaua", "CS Malingapanse", "CS Nensa", "CS Salone", "HR Marromeu", "PS Bauaze"],
            codigos: ["01071127", "01071111", "01071108", "01071109", "01071115", "01071106", "01071107", "01071100", "01071110"]
        },
        muanza: {
            us: ["CS Galinha", "CS Muanza", "CS Muanza-Baixa", "CS Nhansato", "CS Nsituculo", "CS Sanguze-Muana", "CS Wiriquize"], 
    	    codigos: ["01071209", "01071207", "01071206", "01071208", "01071262", "01071205", "01071210"]
        },
        nhamatanda: {
            us: ["PS Siluvo Pedreira", "CS Chiro", "CS Metuchira Lomaco", "CS Lamego", "PS Muda", "CS Nharchonga", "CS Mecuzi-Puaze", "CS Vinho", "CS Tica", "HR Nhamatanda", "CS Mutondo", "CS Siluvo", "PS Mbimbir", "CS Chiadeia", "CS Jasse Manguena", "CS Chirassicua", "PS Nhampoca", "CS Macarorocho"],
            codigos: ["01071317", "01071304", "01071307", "01071308", "01071310", "01071312", "01071314", "01071357", "01071318", "01071301", "01071305", "01071313", "01071306", "01071319", "01071316", "01071321", "01071311", "01071315"]
        }
    },

    inhambane: {
        distritos: ["Funhalouro", "Govuro", "Homoine", "Inhambane", "Inharrime", "Inhassoro", "Jangamo", "Mabote", "Massinga", "Maxixe", "Morrumbene", "Panda", "Vilankulos", "Zavala"],
        funhalouro: {
            us: ["CS Funhalouro", "CS Manhiça", "CS Mavume", "CS Tomé", "CS Tsenane"], 
            codigos: ["01080206", "01080209", "01080207", "01080208", "01080210"]
        },
        govuro: {
            us: ["CS Chimunda", "CS Doane", "CS Jofane", "CS Luido", "CS Maluvane", "CS Nova Mambone", "CS Pande", "CS Save"],
            codigos: ["01080305", "01080306", "01080310", "01080355", "01080311", "01080309", "01080307", "01080308"]
        },
        homoine: {    
            us: ["CS Chinjinguir", "CS Homoine", "CS Inhamangua", "CS Mafuiane", "CS Maganda", "CS Maiaice", "CS Marrengo", "CS Maxamal", "CS Pembe", "CS Quengue", "PS Benhane", "PS Inhamussua", "PS Madumo"],
            codigos: ["01080407", "01080406", "01080418", "01080408", "01080410", "01080409", "01080411", "01080416", "01080415", "01080412", "01080413", "01080417", "01080414"]
        },
        inhambane: {
            us: ["CS Balane ( Urbano )", "CS Conguiana", "CS Guiua", "CS Ilha de Inhambane", "CS Mucucune", "CS Muelé", "CS Salela", "HP Inhambane", "PS Cruzamento"],
            codigos: ["01080106", "01080108", "01080107", "01080110", "01080113", "01080111", "01080112", "01080100", "01080109"]
        },
        inharrime: {
            us: ["CS Chacane", "CS Chongola", "CS Inharrime", "CS Mejoote", "CS Mocumbi", "CS Nhapadiane", "CS Sihane", "PS Coguno", "PS Inhamachafo", "PS Mafassane"],
            codigos: ["01080506", "01080507", "01080509", "01080510", "01080511", "01080505", "01080504", "01080512", "01080508", "01080503"]
        },
        inhassoro: {
            us: ["CS Bazaruto", "CS Chitsecane", "CS Cometela", "CS Inhassoro", "CS Machulane", "CS Macovane", "CS Mangungumente", "CS Nhapele", "CS Temane"],
            codigos: ["01080609", "01080614", "01080611", "01080606", "01080605", "01080607", "01080610", "01080612", "01080613"]
        },
        jangamo: {
            us: ["CS Cumbana", "CS Jangamo", "CS Ligogo", "CS Massavana", "CS Nhancodja", "CS Ravene", "PS Mutamba"],
            codigos: ["01080706", "01080707", "01080705", "01080711", "01080710", "01080709", "01080708"]
        },
        mabote: {
            us: ["CS Benzane", "CS Mabote", "CS Maculuve", "CS Mussengue", "CS Papatane", "CS Tanguane", "CS Zimane"],
            codigos: ["01080811", "01080806", "01080810", "01080807", "01080805", "01080809", "01080808"]
        },
        massinga: {
            us: ["CS Balata", "CS Cangela", "CS Chicomo", "CS Chihunze", "CS Chtuane", "CS Inhaloi", "CS Mangonha", "CS Massinga", "CS Muchungo", "CS Murie", "CS Muvamba", "CS Nhachengue", "CS Rio das Pedras", "HD Massinga"],
            codigos: ["01080907", "01080910", "01080916", "01080919", "01080917", "01080915", "01080911", "01080900", "01080918", "01080914", "01080912", "01080906", "01080913", "01080901"]
        },
        maxixe: {
            us: ["CS Agostinho Neto", "CS Bembe", "CS Chicuque", "CS Cuguana", "CS Dambo", "CS Mabil", "CS Macuamene", "CS Manhala", "CS Maxixe", "CS Tinga Tinga", "HR Chicuque"],
            codigos: ["01081007", "01081011", "01081012", "01081014", "01081008", "01081013", "01081015", "01081016", "01081006", "01081010", "01081000"]
        },
        morrumbene: {
            us: ["CS Barrane", "CS Cambine", "CS Gotite", "CS Magumbo", "CS Mahangue", "CS Maivene", "CS Matacalane", "CS Mocodoene", "CS Morrumbene", "CS Sitila", "CS Tambanjane"],
            codigos: ["01081115", "01081107", "01081106", "01081108", "01081109", "01081112", "01081113", "01081114", "01081111", "01081110", "01081116"]
        },
        panda: {     
            us: ["CS Chivalo", "CS Inhassune", "CS Jojo", "CS Massalane", "CS Mawayela", "CS Panda"],
            codigos: ["01081205", "01081206", "01081209", "01081207", "01081208", "01081210"]
        },
        vilankulos: {
            us: ["CS Belane", "CS Chibuene", "CS Chichocane", "CS Machaniça", "CS Macunhe", "CS Mapinhane", "CS Muabsa", "CS Pambara", "CS Querquer A.", "CS Quewene", "CS Vialanculos", "HR Vilankulos"],
            codigos: ["01081306", "01081313", "01081315", "01081309", "01081314", "01081307", "01081311", "01081308", "01081305", "01081312", "01081310", "01081301"]
        },
        zavala: {
            us: ["CS Banguza", "CS Cala", "CS Canda", "CS Chitondo", "CS Guilundo", "CS Maculuva", "CS Maundene", "CS Mavila", "CS Muane", "CS Quissico", "CS Zandamela", "HD Quissico", "PS Chipole"],
            codigos: ["01081406", "01081408", "01081416", "01081404", "01081407", "01081414", "01081409", "01081413", "01081415", "01081411", "01081410", "01081405", "01081412"]
        }
    },

    gaza: {
        distritos: ["Bilene", "Chibuto", "Chicualacuala", "Chigubo", "Chokwé", "Chongoene", "Guijá", "Limpopo", "Mabalane", "Mandlakazi", "Mapai", "Massangena", "Massingir", "Cidade de Xai-Xai", "Xai-Xai (Extinto)"],
        bilene: {
            us: ["CS Chissano (Antiga)", "CS Incaia", "CS Licilo", "CS Macia", "CS Mamonho", "CS Mangol", "CS Mazivila", "CS Messano", "CS Olombe", "CS Praia de Bilene", "CS Tuane"],
            codigos: ["01090209", "01090210", "01090211", "01090206", "01090208", "01090216", "01090212", "01090213", "01090214", "01090207", "01090215"]
        },
        chibuto: {
            us: ["CS Alto Changane", "CS Celula Mussavene", "CS Chaimite", "CS Changanine", "CS Chibuto", "CS Chimundo", "CS Chipadja", "CS Coca Missava", "CS Maivene", "CS Malehice", "CS Maqueze", "CS Meboi", "CS Mukhotwene", "CS Muxaxane", "CS Nwavaquene", "HR Chibuto", "PS Vila Milenio"],
            codigos: ["01090307", "01090304", "01090312", "01090317", "01090306", "01090313", "01090308", "01090305", "01090311", "01090309", "01090302", "01090318", "01090315", "01090310", "01090314", "01090301", "01090303"]
        },
        chicualacuala: {
            us: ["PS Chidulo (Antiga)", "CS Litlatla", "CS Mahatlane", "PS Mapai Ngala (Antiga)", "CS Chicualacuala", "HD Mapai (Antiga)", "PS Pafuri", "CS Mapai (Antiga)", "CS Mepuzi (Antiga)"],
            codigos: ["01090406", "01090412", "01090407", "01090409", "01090414", "01090401", "01090411", "01090408", "01090410"]
        },
        chigubo: {
            us: ["CS Cubo", "CS Machaila (Antiga)", "CS Ndindiza", "CS Nhanale", "CS Saute", "CS Zinhane"],
            codigos: ["01090511", "01090509", "01090508", "01090510", "01090506", "01090507"]
        },
        chokwe: {
            us: ["CS 25 de Setembro", "CS Barragem", "CS Carmelo", "CS Chalucuane", "CS Chiaquelane Reassentamento", "CS Cidade de Chokwé", "CS Conhane", "CS Hokwe", "CS Lionde", "CS Malhazine", "CS Manjangue", "CS Muianga", "CS Tlawene", "CS Urbano 3º Bairro", "CS Xilembene", "HR Chokwé", "PS 6 Bairro", "PS Chiaquelane", "PS Chiguidela", "PS Cumba", "PS de Zuza", "PS Machua", "PS Macunene", "PS Mapapa", "PS Massavasse", "PS Militar", "PS Wachicoloane"],
            codigos: ["01090605", "01090608", "01090603", "01090615", "01090626", "01090606", "01090617", "01090616", "01090620", "01090622", "01090601", "01090609", "01090612", "01090604", "01090619", "01090600", "01090624", "01090618", "01090602", "01090614", "01090607", "01090613", "01090625", "01090610", "01090621", "01090623", "01090611"]
        },
        chongoene: {
            us: ["CS Banhine", "CS Bungane", "CS Chicavane", "CS Chongoene", "CS Cucuine", "CS Maciene", "CS Macupulane", "CS Mangunze", "CS Nhacutse", "CS Siaia", "PS Danbine 2000", "PS Nhamavila"],
            codigos: [ "", "", "", "", "", "", "", "", "", "", "", ""]
        },
        guija: {
            us: ["CS Chibabel", "CS Chimbembe", "CS Chinhacanine", "CS Chivonguene", "CS Guija", "CS Javanhane", "CS Mpelane", "CS Mubanguene", "CS Nalazi", "PS Mbalavala"], 
            codigos: ["01090715", "01090709", "01090710", "01090711", "01090706", "01090708", "01090712", "01090713", "01090707", "01090701"]
        },
        limpopo: {
            us: ["CS Chipenhe", "CS Chissano", "CS Julius Nyerere", "CS Vladimir Lenine", "CS Zongoene", "HR Chicumbane"],
            codigos: ["", "", "", "", "", ""]
        },
        mabalane: {
            us: ["CS Combomune", "CS de Chinhequete", "CS Mabalane", "CS Mabomo", "CS Matsambo", "CS Pfukwe", "CS Tsocate", "PS de Munginge", "PS Macarale", "PS Nhimbainwe B"], 
            codigos: ["01090807", "01090814", "01090806", "01090808", "01090809", "01090812", "01090811", "01090802", "01090801", "01090810"]
        },
        mandlakazi: {
            us: ["CS Banguene", "CS Betula", "CS Chibondzane", "CS Chicavane (Antiga)", "CS Chidenguele", "CS Cucuine (Antiga)", "CS Dengoine", "CS Incadine", "CS Laranjeiras", "CS Macasselane", "CS Macuacua", "CS Macupulane (Antiga)", "CS Mandlakazi", "CS Mangunze (Antiga)", "CS Manhique", "CS Matsinhane", "CS Mausse", "CS Mussavelane", "CS Muzamane", "CS Ndolene", "CS Tavane", "HR Mandlakazi"],
            codigos: ["01090910", "01090908", "01090911", "01090926", "01090906", "01090917", "01090907", "01090927", "01090920", "01090928", "01090912", "01090913", "01090902", "01090914", "01090915", "01090918", "01090919", "01090909", "01090916", "01090903", "01090921", "01090901"]
        },
        mapai: {
            us: ["CS Machaila", "CS Mapai", "CS Mepuzi", "HD Mapai", "PS Chidulo", "PS Mapai Ngaia"],
            codigos: ["", "", "", "", "", ""]
        },
        massangena: {
            us: ["CS Massangena", "CS Mavue", "CS Mucambene"],
            codigos: ["01091006", "01091008", "01091007"]
        },
        massingir: {
            us: ["CS Massingir", "CS Mucatine", "PS Chibotane", "PS Cubo", "PS Macaringue", "PS Machamba", "PS Mavodze", "PS Zulo"],
            codigos: ["01091106", "01091112", "01091108", "01091109", "01091116", "01091110", "01091111", "01091107"]
        },
        cidadeDeXaiXai: {
            us: ["CS Chilaulene", "CS Cidade de Xai-Xai", "CS Marien Nguabi", "CS Patrice Lumumba", "CS Zimilene", "HP Xai-Xai", "PS FIR", "PS Marien Nguabi", "PS Praia"], 
            codigos: ["", "01090107", "01090106", "01090108", "", "01090100", "01090114", "01090113", "01090109"]
        },
        xaiXaiExtinto: {
            us: ["CS Banhine (Antiga)", "CS Bungane (Antiga)", "CS Chilaulane (Antiga)", "CS Chipenhe (Antiga)", "CS Chongoene (Antiga)", "CS Julius Nyerere (Antiga)", "CS Maciene (Antiga)", "CS Nhacutse (Antiga)", "CS Siaia (Antiga)", "CS Vladimir Lenine (Antiga)", "CS Zimilene (Antiga)", "CS Zongoene (Antiga)", "HR Chicumbane (Antiga)", "PS Ndambine 2000 (Antiga)", "PS Nhamavila (Antiga)"],
            
            codigos: ["01091206", "01091217", "01091207", "01091208", "01091209", "01091211", "01091212", "01091210", "01091213", "01091215", "01091221", "01091214", "01091201", "01091222", "01091216"]
        }
    }, 
    maputoprovincia: {
        distritos: ["Boane", "Magude", "Manhiça", "Marracuene", "Matola", "Matutuíne", "Moamba", "Namaacha"],
        boane: {
            us: ["CS Beleluane", "CS Boane", "CS Campoane", "CS Escola Prática de Formação de Sargentos", "CS Josina Machel", "CS Mabanja", "CS Mahanhane", "CS Mahubo", "CS Massaca", "CS Mulotana", "CS Picoco", "PS Águas de Maputo", "PS Casa Gaiato", "PS Matola-Rio", "PS Pequenos Libombos"],
            codigos: ["01100210", "01100206", "01100207", "01100217", "01100219", "01100211", "01100205", "01100208", "01100209", "01100218", "01100216", "01100215", "01100214", "01100212", "01100213"]
        },
        magude: {
            us: ["CS Chichuco", "CS Chicutso", "CS Facazissa", "CS Magude", "CS Mahel", "CS Mapulanguene", "CS Moine", "CS Motaze", "CS Panjane"], 
            codigos: ["01100315", "01100312", "01100314", "01100306", "01100310", "01100311", "01100313", "01100308", "01100309"]
        },
        manhica: {
            us: ["CS 3 de Fevereiro", "CS Calanga", "CS Chibucutso", "CS Escola Prática do Exército de Munguine", "CS Ilha Josina", "CS Malavela", "CS Maluana", "CS Manhiça", "CS Maragra", "CS Mirona", "CS Munguine", "CS Nwamatibjana", "CS Taninga", "CS Xinavane", "HD Manhiça", "HR Xinavane", "PS Chibututuine"],
            codigos: ["01100415", "01100410", "01100417", "01100420", "01100414", "01100408", "01100409", "01100402", "01100406", "01100416", "01100411", "01100413", "01100412", "01100419", "01100407", "01100400", "01100418"]
        },
        marracuene: {
            us: ["CS Habel Jafar", "CS Machubo", "CS Mali", "CS Marracuene", "CS Matalane", "CS Michafutene", "CS Mumemo", "CS Nhongonhane", "CS Ricatla"],
            codigos: ["01100515", "01100508", "01100514", "01100506", "01100507", "01100509", "01100513", "01100510", "01100511"]
        },
        matola: {
            us: ["CS Bedene", "CS Boquisso", "CS Khongolote", "CS Liberdade", "CS Machava I", "CS Machava II", "CS Matola", "CS Matola Gare", "CS Matola II", "CS Muhalaze", "CS Ndlavela", "CS S. Damanse", "CS Tsalala", "CS Unidade A", "HG Machava", "HP Matola", "PS BO-Machava", "PS Cadeia Central", "PS Cimentos", "PS Clinica da Liberdade", "PS Clinica da Matola", "PS Dzovo", "PS Fomento", "PS Hanhane", "PS Km-25", "PS Mapinhane", "PS Policia", "PS T.3", "PS Zona Verde"],
            codigos: ["01100122", "01100114", "01100117", "01100113", "01100121", "01100107", "01100110", "01100108", "01100106", "01100125", "01100109", "01100111", "01100167", "01100118", "01100100", "01100101", "01100166", "01100119", "01100161", "01100155", "01100158", "01100168", "01100156", "01100157", "01100116", "01100170", "01100123", "01100115", "01100169"]
        },
        matutuine: {
            us: ["CS Catuane", "CS Gueveza", "CS Hindanne", "CS Mabilibili", "CS Manhangane", "CS Matutuine", "CS Mungazine", "CS Ndelane", "CS Nsime", "CS Ponta do Ouro", "CS Salamanga", "CS Santa Maria", "CS Zitundo"],
            codigos: ["01100608", "01100659", "01100614", "01100609", "01100671", "01100607", "01100663", "01100669", "01100660", "01100611", "01100612", "01100670", "01100613"]
        },
        moamba: {
            us: ["CS Chinhanguanine", "CS Corumane", "CS Mahulane", "CS Moamba", "CS Ngolhosa", "CS Pessene", "CS Ressano Garcia", "CS Sabie", "CS Tenga", "PS Chanculo"],
            codigos: ["01100713", "01100708", "01100712", "01100706", "01100705", "01100711", "01100707", "01100709", "01100710", "01100714"]
        },
        namaacha: {
            us: ["CS Changalane", "CS Dibinduane", "CS Goba", "CS Kulula", "CS Mafuiane", "CS Mahelane", "CS Mundavene", "CS Namaacha", "CS Odete Mechisso", "CS Wamongo"],
            codigos: ["01100807", "01100813", "01100808", "01100809", "01100811", "01100810", "01100815", "01100806", "01100814", "01100855"]
        }
    },
    maputocidade: {
        distritos:  ["Kampfumo", "Kamaxakene", "kamavota", "Kamabukwana", "Kanyaka", "Katembe", "Nlhamankulu"],
        kampfumo: {
            us: ["CS Alto Maé", "CS Malhangalene", "CS Maxaquene", "CS Polana Cimento", "CS Porto", "HC Maputo", "HM Maputo", "PS Nº 2 Tribunal"],
            codigos: ["01110106", "01110109", "01110107", "01110110", "01110111", "01110101", "01110102", "01110113"]
        },
        kamaxakene: {
            us: ["CS 1 de Maio", "Hospital Polana Caniço"],
            codigos: ["01110307", "01110317"]
        },
        kamavota: {
            us: ["CS 1 de Junho", "CS Albazine", "CS Chiango", "CS Hulene", "CS Mavalane", "CS Pescadores", "CS Romão", "HG Mavalane"],
            codigos: ["01110406", "01110411", "01110416", "01110414", "01110422", "01110415", "01110412", "01110401"]
        },
        kamabukwana: {
            us: ["CS Magoanine Tendas", "CS Magoanine", "HPsi Infulene", "CS Zimpeto", "CS Inhagoia", "CS Bagamoio"],
            codigos: ["01110511", "01110514", "01110508", "01110515", "01110512", "01110507"]
        },
        kanyaka: {
            us: ["CS Inguane", "CS Inhaca", "CS Muchina"],
            codigos: ["01110701", "01110708", "01110719"]
        },
        katembe: {
            us: ["CS Catembe", "CS Chamissava", "CS Incassane", "CS Mutsekua"],
            codigos: ["01110609", "", "01110613", "01110621"]
        },
        nlhamankulu: {
            us: ["CS Chamanculo", "CS José Macamo", "CS Nº 14", "CS Xipamanine", "HG Chamanculo", "HG José Macamo"],
            codigos: ["01110214", "01110206", "01110208", "01110212", "01110201", "01110202"]
        }
    }
}
function formatarString(str) {
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    str = str.replaceAll(/\W/g, "").toLowerCase();
    return str;
}
function notEmpty(...inputs) {
    let filledInput = 0;
    for (const input of inputs) {
        input.value !== "" && filledInput++;
    }
    if(filledInput >= inputs.length) return true
    else return false;
}
function listarProvincias() {
    const provDataList = document.getElementById("datalist-provincias");
    for (const prov of moz.provincias) {
        provDataList.innerHTML += `<option value="${prov}"></option>`;
    }
}
function listarDistritos() {
    const distDatalist = document.getElementById("datalist-distritos");
    const inputProv = document.getElementById("input-provincia");
    let provDefinida =  formatarString(inputProv.value);
    distDatalist.innerHTML = "";
    for (const prov in moz) {
        if(prov === provDefinida) {
            const distritos = moz[prov].distritos;
            for (const d of distritos) {
                distDatalist.innerHTML+= `<option value="${d}"></option>`;
            }
        }
    }
}
function listarUSs() {
    const usDataList = document.getElementById("datalist-us");
    const inputDistrito = document.getElementById("input-distrito");
    let distDefinido = formatarString(inputDistrito.value);
    usDataList.innerHTML = "";
    for (const prov in moz) {
        for (const distrito in moz[prov]) {
            if(formatarString(distrito) === distDefinido) {
                let USs = moz[prov][distrito].us;
                for (const us of USs) {
                    usDataList.innerHTML += `<option value="${us}"></option>`;
                }
            }
        }
    }
}
window.addEventListener("load", () => {
    listarProvincias();
    listarDistritos();
    listarUSs();
    const inputProv = document.getElementById("input-provincia");
    inputProv.addEventListener("input", listarDistritos);
    const inputDistrito = document.getElementById("input-distrito");
    inputDistrito.addEventListener("input", listarUSs);
});

