const bankSoal = [
    // --- EASY (Dasar-dasar Python) ---
    {
        id: 1,
        question: "Bagaimana cara mencetak 'Hello World' di Python?",
        options: ["print('Hello World')", "echo 'Hello World'", "console.log('Hello World')", "System.out.println('Hello World')"],
        answerHash: "eac8baf120d80d7c72e3eb7f8659cbd0",
        difficulty: "Easy"
    },
    {
        id: 2,
        question: "Manakah yang merupakan tipe data untuk angka bulat?",
        options: ["float", "int", "str", "bool"],
        answerHash: "f40005e469423938b3c8df9399db2824",
        difficulty: "Easy"
    },
    {
        id: 3,
        question: "Simbol untuk komentar satu baris di Python adalah?",
        options: ["//", "/* */", "#", "--"],
        answerHash: "0cb4a1df2cf8995d4566b10dfcb53ed4",
        difficulty: "Easy"
    },
    {
        id: 4,
        question: "Bagaimana cara membuat variabel x bernilai 5?",
        options: ["int x = 5;", "x = 5", "var x = 5;", "let x = 5;"],
        answerHash: "0b67ab620c79fb52823cb3dde18f2431",
        difficulty: "Easy"
    },
    {
        id: 5,
        question: "Operator aritmatika untuk pangkat adalah?",
        options: ["^", "**", "//", "%"],
        answerHash: "351fb53e796f9d99b2dade1eb4c01f6d",
        difficulty: "Easy"
    },
    {
        id: 6,
        question: "Manakah penulisan boolean yang benar di Python?",
        options: ["true", "True", "TRUE", "1"],
        answerHash: "52e9cdb930a284b5dcf168f08871c04d",
        difficulty: "Easy"
    },
    {
        id: 7,
        question: "Apa output dari len('Python')?",
        options: ["5", "6", "7", "Error"],
        answerHash: "b69bcab5561c9632dff2c0db105515c2",
        difficulty: "Easy"
    },

    // --- MEDIUM (Struktur Data & Kontrol Alur) ---
    {
        id: 8,
        question: "Bagaimana cara membuat list kosong?",
        options: ["list = ()", "list = []", "list = {}", "list = new List()"],
        answerHash: "9a8e11ed2813385f28163524f15ebf72",
        difficulty: "Medium"
    },
    {
        id: 9,
        question: "Keyword untuk mendefinisikan fungsi adalah?",
        options: ["func", "def", "function", "void"],
        answerHash: "5735d0ed4fd8081575ca5dc4c0728075",
        difficulty: "Medium"
    },
    {
        id: 10,
        question: "Bagaimana cara mengakses elemen pertama dari list 'my_list'?",
        options: ["my_list[1]", "my_list(0)", "my_list[0]", "my_list.first()"],
        answerHash: "a2b1f101dfb9aa6b8c993f85c13265b0",
        difficulty: "Medium"
    },
    {
        id: 11,
        question: "Apa output dari print(10 // 3)?",
        options: ["3.33", "3", "4", "3.0"],
        answerHash: "4352a375bdd521a6e074b0c6abc0e526",
        difficulty: "Medium"
    },
    {
        id: 12,
        question: "Manakah library populer untuk manipulasi data tabel?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        answerHash: "b40ed0897954fcea640ad8dbe36bd9b4",
        difficulty: "Medium"
    },
    {
        id: 13,
        question: "Method untuk menambahkan elemen ke akhir list adalah?",
        options: ["add()", "insert()", "push()", "append()"],
        answerHash: "15c0458f82f1129667586a3470968199",
        difficulty: "Medium"
    },
    {
        id: 14,
        question: "Apa hasil dari 'a' + 'b'?",
        options: ["ab", "error", "9798", "['a', 'b']"],
        answerHash: "5927b705ea7e01696b47eaa207634786",
        difficulty: "Medium"
    },

    // --- HARD (Konsep Lanjutan & Library) ---
    {
        id: 15,
        question: "Apa output dari [x**2 for x in range(3)]?",
        options: ["[1, 2, 3]", "[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]"],
        answerHash: "6c02c34f5cac66bba52f37ab6833ff83",
        difficulty: "Hard"
    },
    {
        id: 16,
        question: "Manakah yang merupakan mutable data type?",
        options: ["tuple", "string", "list", "int"],
        answerHash: "4cb453dab2d89a3283a302ed82ab0366",
        difficulty: "Hard"
    },
    {
        id: 17,
        question: "Keyword 'lambda' digunakan untuk membuat?",
        options: ["Loop", "Anonymous Function", "Class", "Module"],
        answerHash: "b902697c0c28a08a5145c2755c65df42",
        difficulty: "Hard"
    },
    {
        id: 18,
        question: "Apa kegunaan 'try-except' block?",
        options: ["Looping", "Error Handling", "File I/O", "Multithreading"],
        answerHash: "d4c3a81fa996cd6e3a1e440cee874c32",
        difficulty: "Hard"
    },
    {
        id: 19,
        question: "Di Pandas, fungsi untuk membaca file CSV adalah?",
        options: ["pd.read_csv()", "pd.import_csv()", "pd.load_csv()", "pd.csv_read()"],
        answerHash: "0780e41e7ac73dfae84b996bda6a9199",
        difficulty: "Hard"
    },
    {
        id: 20,
        question: "Apa output dari print(set([1, 2, 2, 3]))?",
        options: ["[1, 2, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{1, 2, 2, 3}"],
        answerHash: "fa8c1422d4ca94d69ff4c0937e4abcf3",
        difficulty: "Hard"
    },
    {
        id: 21,
        question: "Manakah cara yang benar untuk slicing list my_list dari index 1 sampai akhir?",
        options: ["my_list[1:]", "my_list[:1]", "my_list[1:-1]", "my_list[::1]"],
        answerHash: "5f80df6f8d58a93387475b0c626e62ac",
        difficulty: "Hard"
    },

    // --- NEW EASY QUESTIONS ---
    {
        id: 22,
        question: "Apa output dari print(2 * 3)?",
        options: ["5", "6", "23", "Error"],
        answerHash: "28af41ddf8f9dd1c831998a43fcad49f",
        difficulty: "Easy"
    },
    {
        id: 23,
        question: "Tipe data dari 'Hello' adalah?",
        options: ["int", "float", "str", "bool"],
        answerHash: "eeb60bc3ff72fa60588fef2ff6613fff",
        difficulty: "Easy"
    },
    {
        id: 24,
        question: "Operator untuk sisa bagi (modulus) adalah?",
        options: ["/", "%", "//", "*"],
        answerHash: "37b7b84f4bee4be60daa39e6dbde2141",
        difficulty: "Easy"
    },
    {
        id: 25,
        question: "Nilai boolean False di Python ditulis sebagai?",
        options: ["false", "False", "FALSE", "0"],
        answerHash: "a79433dcad4688c234b4786ac5280d2e",
        difficulty: "Easy"
    },
    {
        id: 26,
        question: "Fungsi untuk meminta input dari user adalah?",
        options: ["scan()", "get()", "input()", "read()"],
        answerHash: "ba3f3b2ab2e0e49162d82537eeaf309a",
        difficulty: "Easy"
    },
    {
        id: 27,
        question: "Fungsi untuk mengubah string menjadi integer adalah?",
        options: ["str()", "float()", "int()", "char()"],
        answerHash: "1d90498a3268958c92d85d1372c72646",
        difficulty: "Easy"
    },
    {
        id: 28,
        question: "Operator perbandingan 'sama dengan' adalah?",
        options: ["=", "==", ":=", "==="],
        answerHash: "e990f2dff7c5a9343c941e34b9ec5e2e",
        difficulty: "Easy"
    },
    {
        id: 29,
        question: "Apa output dari type(3.14)?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        answerHash: "4cc31ed5227f60951607cac99543801d",
        difficulty: "Easy"
    },
    {
        id: 30,
        question: "Index pertama dalam string atau list dimulai dari?",
        options: ["0", "1", "-1", "2"],
        answerHash: "03c7947b62335f7de17ad3844f300747",
        difficulty: "Easy"
    },
    {
        id: 31,
        question: "Manakah nama variabel yang TIDAK valid?",
        options: ["nama_saya", "namaSaya", "1nama", "_nama"],
        answerHash: "b5daed26d4f6756ab457a85b2109a962",
        difficulty: "Easy"
    },

    // --- NEW MEDIUM QUESTIONS ---
    {
        id: 32,
        question: "Method untuk menghapus elemen spesifik dari list adalah?",
        options: ["delete()", "remove()", "erase()", "cut()"],
        answerHash: "8f7ab0f0d342b9a626ba582f83b2c754",
        difficulty: "Medium"
    },
    {
        id: 33,
        question: "Bagaimana cara menambahkan key 'umur' dengan nilai 20 ke dictionary 'data'?",
        options: ["data.add('umur', 20)", "data['umur'] = 20", "data.append('umur', 20)", "data.insert('umur', 20)"],
        answerHash: "5abdaabf5e0a8c45d0109ad9e6acc98a",
        difficulty: "Medium"
    },
    {
        id: 34,
        question: "Apa isi dari list(range(3))?",
        options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"],
        answerHash: "4f7f766d57a5115e5c1db95fbecc9315",
        difficulty: "Medium"
    },
    {
        id: 35,
        question: "Apa output dari len([10, 20, 30])?",
        options: ["2", "3", "30", "Error"],
        answerHash: "e7bddb35e58867e1bfd5559a7af99e9c",
        difficulty: "Medium"
    },
    {
        id: 36,
        question: "Operator untuk menggabungkan dua list adalah?",
        options: ["*", "-", "+", "/"],
        answerHash: "770094914096f91d705688da54a7b855",
        difficulty: "Medium"
    },
    {
        id: 37,
        question: "Untuk mengecek apakah key ada di dictionary, gunakan keyword?",
        options: ["exists", "has", "in", "check"],
        answerHash: "cc6bbf6c68c4fc430c8a339edea315f9",
        difficulty: "Medium"
    },
    {
        id: 38,
        question: "Jika fungsi tidak memiliki return statement, apa yang dikembalikan?",
        options: ["0", "False", "None", "Error"],
        answerHash: "116e95cc788b1a31a22a697c6605f45a",
        difficulty: "Medium"
    },
    {
        id: 39,
        question: "Apa hasil slicing [10, 20, 30, 40][1:3]?",
        options: ["[20, 30]", "[10, 20]", "[20, 30, 40]", "[30, 40]"],
        answerHash: "2b8249c325705d2ad0505eced776463b",
        difficulty: "Medium"
    },
    {
        id: 40,
        question: "Method string untuk mengubah huruf menjadi kapital semua adalah?",
        options: ["toUpper()", "upper()", "capitalize()", "uppercase()"],
        answerHash: "e62de946439596bbc8b72d92845c2487",
        difficulty: "Medium"
    },
    {
        id: 41,
        question: "Loop 'while' akan berjalan selama kondisinya?",
        options: ["False", "True", "None", "0"],
        answerHash: "faea17c0e0095a6cd6beb5bd289643ed",
        difficulty: "Medium"
    },

    // --- NEW HARD QUESTIONS ---
    {
        id: 42,
        question: "Simbol untuk decorator di Python adalah?",
        options: ["#", "$", "@", "&"],
        answerHash: "a819f8f9a289c3f99313832d8db090e1",
        difficulty: "Hard"
    },
    {
        id: 43,
        question: "Method spesial untuk constructor class adalah?",
        options: ["__init__", "__create__", "__new__", "__start__"],
        answerHash: "65f57b1f43382068ee9b376ee3457f07",
        difficulty: "Hard"
    },
    {
        id: 44,
        question: "Bagaimana cara class Child mewarisi class Parent?",
        options: ["class Child extends Parent:", "class Child(Parent):", "class Child implements Parent:", "class Child : Parent"],
        answerHash: "736ecf5ca15a52354c54f2c504bd64fe",
        difficulty: "Hard"
    },
    {
        id: 45,
        question: "Fungsi map(func, iterable) berguna untuk?",
        options: ["Menyaring data", "Mengaplikasikan fungsi ke setiap elemen", "Mengurutkan data", "Menghapus data"],
        answerHash: "ce5cbbf3d778a1cc5b3763356830eff3",
        difficulty: "Hard"
    },
    {
        id: 46,
        question: "Fungsi filter(func, iterable) berguna untuk?",
        options: ["Mengubah data", "Menyaring elemen berdasarkan kondisi", "Menjumlahkan data", "Membagi data"],
        answerHash: "c9ffcb11611c44a74d88e3a5dd6b15cd",
        difficulty: "Hard"
    },
    {
        id: 47,
        question: "Parameter *args digunakan untuk?",
        options: ["Keyword arguments", "Variable length positional arguments", "Default arguments", "Required arguments"],
        answerHash: "9afca731784115a427f934f3f7fa2762",
        difficulty: "Hard"
    },
    {
        id: 48,
        question: "Parameter **kwargs digunakan untuk?",
        options: ["Variable length keyword arguments", "List arguments", "Tuple arguments", "String arguments"],
        answerHash: "e084e9bc581137cc99b4f2fe4258946c",
        difficulty: "Hard"
    },
    {
        id: 49,
        question: "Perbedaan 'is' dan '==' adalah?",
        options: ["Sama saja", "'is' cek identity (memory), '==' cek value", "'is' cek value, '==' cek identity", "'is' untuk angka, '==' untuk string"],
        answerHash: "ec907be2eecdc22281baa24802259fe3",
        difficulty: "Hard"
    },
    {
        id: 50,
        question: "Keyword 'yield' digunakan dalam?",
        options: ["Loop", "Generator function", "Class", "Import"],
        answerHash: "6b6478b03da040f8010dc8694e279af8",
        difficulty: "Hard"
    },
    {
        id: 51,
        question: "Keyword 'with' biasanya digunakan untuk?",
        options: ["Looping", "Context Manager (misal buka file)", "Definisi fungsi", "Kondisi if"],
        answerHash: "e8100949dd54a9204eac3181d47430d8",
        difficulty: "Hard"
    },
    // --- ADDITIONAL EASY QUESTIONS (Python & Data Science Basics) ---
    {
        id: 52,
        question: "Siapa pencipta bahasa pemrograman Python?",
        options: ["Guido van Rossum", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        answerHash: "7a2c2f1d5a91bbdf4d10e22021d6ea2a",
        difficulty: "Easy"
    },
    {
        id: 53,
        question: "Ekstensi file kode Python adalah?",
        options: [".py", ".java", ".cpp", ".html"],
        answerHash: "3a24179b97819f2f1e964752898e4190",
        difficulty: "Easy"
    },
    {
        id: 54,
        question: "Library Python populer untuk visualisasi data adalah?",
        options: ["Matplotlib", "Requests", "Flask", "Django"],
        answerHash: "d3583a8c3724db6c52c114a88515c6d8",
        difficulty: "Easy"
    },
    {
        id: 55,
        question: "Apa kepanjangan dari AI?",
        options: ["Artificial Intelligence", "Automated Interface", "Apple Inc.", "Advanced Integration"],
        answerHash: "a0110bfff21f8a91358909cb35adb022",
        difficulty: "Easy"
    },
    {
        id: 56,
        question: "Apa kepanjangan dari ML dalam konteks data?",
        options: ["Machine Learning", "Markup Language", "Mobile Legends", "Main Loop"],
        answerHash: "922a1a6460ae36bc06ab6929976f28f0",
        difficulty: "Easy"
    },
    {
        id: 57,
        question: "Manakah yang merupakan contoh Supervised Learning?",
        options: ["Klasifikasi Email Spam", "Clustering Customer", "Reinforcement Learning", "Dimensionality Reduction"],
        answerHash: "6ccfe83c2da2191c79fd8ea06b2c8543",
        difficulty: "Easy"
    },
    {
        id: 58,
        question: "Library Python untuk komputasi numerik dan array multidimensi adalah?",
        options: ["NumPy", "Pandas", "Seaborn", "Keras"],
        answerHash: "2ac6db9b7b3f27fdcf729058fee29cf1",
        difficulty: "Easy"
    },
    {
        id: 59,
        question: "Perintah untuk menginstall library Python via terminal adalah?",
        options: ["pip install nama_paket", "npm install nama_paket", "apt-get install", "python add nama_paket"],
        answerHash: "c03d630a34ecf90dd121e74d416f221f",
        difficulty: "Easy"
    },
    {
        id: 60,
        question: "Tipe data untuk teks di Python disebut?",
        options: ["String", "Integer", "Boolean", "Float"],
        answerHash: "e308848a5273d6b049b0d4068edfc3aa",
        difficulty: "Easy"
    },
    {
        id: 61,
        question: "Manakah format file notebook yang sering digunakan Data Scientist?",
        options: [".ipynb", ".docx", ".exe", ".mp4"],
        answerHash: "fc4a6f4a0b33f8ba8e6487a0bf741dec",
        difficulty: "Easy"
    },
    {
        id: 62,
        question: "Apa output dari 10 % 3?",
        options: ["1", "3", "0", "3.33"],
        answerHash: "4436251c999026682ed15aa14e83afc2",
        difficulty: "Easy"
    },
    {
        id: 63,
        question: "Simbol untuk membuat list di Python adalah?",
        options: ["[]", "{}", "()", "<>"],
        answerHash: "d7d2ac0a44a6d5a5b0ee3963e76b3c3f",
        difficulty: "Easy"
    },
    {
        id: 64,
        question: "Simbol untuk membuat dictionary di Python adalah?",
        options: ["{}", "[]", "()", "//"],
        answerHash: "1fb6b69180c62c2cfc63c22c3d32e833",
        difficulty: "Easy"
    },
    {
        id: 65,
        question: "Manakah yang BUKAN tipe data dasar di Python?",
        options: ["Array", "Integer", "Float", "String"],
        answerHash: "4ca3936ab4628e62e64d6b008e54ba15",
        difficulty: "Easy"
    },
    {
        id: 66,
        question: "Fungsi untuk menampilkan teks ke layar adalah?",
        options: ["print()", "echo()", "display()", "write()"],
        answerHash: "227e0831798b8787b19d9e49374bf8b7",
        difficulty: "Easy"
    },
    {
        id: 67,
        question: "Apa itu 'Bug' dalam pemrograman?",
        options: ["Kesalahan dalam kode", "Fitur rahasia", "Jenis variabel", "Nama library"],
        answerHash: "a7a8b60d32ffc1d942d457ed0ebf64a3",
        difficulty: "Easy"
    },
    {
        id: 68,
        question: "Proses memperbaiki error dalam kode disebut?",
        options: ["Debugging", "Coding", "Deploying", "Compiling"],
        answerHash: "2e9360dcca689e47b9f42788dd4331fa",
        difficulty: "Easy"
    },
    {
        id: 69,
        question: "Manakah operator logika di Python?",
        options: ["and", "&&", "||", "!"],
        answerHash: "f4e49099cb2b11ca65873e6300fb55db",
        difficulty: "Easy"
    },
    {
        id: 70,
        question: "Apa hasil dari bool(0)?",
        options: ["False", "True", "None", "Error"],
        answerHash: "73b5312fde66afede16f216d82f2a672",
        difficulty: "Easy"
    },
    {
        id: 71,
        question: "Apa hasil dari bool(1)?",
        options: ["True", "False", "None", "Error"],
        answerHash: "34b9d49e8ef2a6459e620390f7f159f2",
        difficulty: "Easy"
    },
    {
        id: 72,
        question: "Untuk membuat komentar banyak baris (docstring) digunakan?",
        options: ["''' text '''", "// text", "# text", "<!-- text -->"],
        answerHash: "5257ec1ec286d596cdd976169fa17bd2",
        difficulty: "Easy"
    },
    {
        id: 73,
        question: "Manakah library untuk Machine Learning klasik?",
        options: ["Scikit-learn", "React", "Vue", "Laravel"],
        answerHash: "e0f2e965c43118d430c7e6449291be33",
        difficulty: "Easy"
    },
    {
        id: 74,
        question: "Apa itu CSV?",
        options: ["Comma Separated Values", "Computer System Video", "Code Syntax Verification", "Central Service View"],
        answerHash: "6dd08586ecf467b66048fd45468632ae",
        difficulty: "Easy"
    },
    {
        id: 75,
        question: "Fungsi range(5) menghasilkan urutan?",
        options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"],
        answerHash: "0ff7e09c5d0438d811209ac21e914d89",
        difficulty: "Easy"
    },
    {
        id: 76,
        question: "Operator 'tidak sama dengan' di Python adalah?",
        options: ["!=", "<>", "!==", "not ="],
        answerHash: "aa7577dc4ee91969af0bba81bcdd193a",
        difficulty: "Easy"
    },
    {
        id: 77,
        question: "Keyword untuk menghentikan loop seketika adalah?",
        options: ["break", "stop", "exit", "pause"],
        answerHash: "8dc0e1d11e489052dd3882b833861d7a",
        difficulty: "Easy"
    },
    {
        id: 78,
        question: "Keyword untuk melanjutkan ke iterasi berikutnya adalah?",
        options: ["continue", "next", "skip", "pass"],
        answerHash: "45987065479c41b90342c0051ecfa407",
        difficulty: "Easy"
    },
    {
        id: 79,
        question: "Apa itu 'Syntax Error'?",
        options: ["Kesalahan penulisan kode", "Kesalahan logika", "Kesalahan saat runtime", "Kesalahan hardware"],
        answerHash: "5d8305b467fa47eaebff23b6e62688aa",
        difficulty: "Easy"
    },
    {
        id: 80,
        question: "Manakah yang merupakan IDE atau Text Editor untuk Python?",
        options: ["VS Code", "Photoshop", "Excel", "PowerPoint"],
        answerHash: "0f71d773fa669752c9d2450c21c06afd",
        difficulty: "Easy"
    },
    {
        id: 81,
        question: "Variabel di Python bersifat case-sensitive, artinya?",
        options: ["Huruf besar dan kecil dibedakan", "Hanya huruf kecil", "Hanya huruf besar", "Tidak peduli huruf besar/kecil"],
        answerHash: "c858967ba73223a310e2c99c3bdda2c4",
        difficulty: "Easy"
    },

    // --- ADDITIONAL MEDIUM QUESTIONS (Data Science & Logic) ---
    {
        id: 82,
        question: "Apa itu Overfitting dalam Machine Learning?",
        options: ["Model terlalu hafal data latih", "Model terlalu sederhana", "Data tidak cukup", "Model tidak bisa belajar"],
        answerHash: "233c27aa8e135296809b8d323c62791f",
        difficulty: "Medium"
    },
    {
        id: 83,
        question: "Apa kegunaan fungsi 'groupby' di Pandas?",
        options: ["Mengelompokkan data berdasarkan kategori", "Mengurutkan data", "Menghapus data duplikat", "Menggabungkan dua tabel"],
        answerHash: "d0251cc28918e844319df1157f49b23e",
        difficulty: "Medium"
    },
    {
        id: 84,
        question: "Manakah cara penulisan List Comprehension yang benar?",
        options: ["[x for x in data]", "(x for x in data)", "{x for x in data}", "list(x in data)"],
        answerHash: "ea6ba131170bcbe350c8d841bacbb2ec",
        difficulty: "Medium"
    },
    {
        id: 85,
        question: "Apa nilai default untuk missing value di Pandas?",
        options: ["NaN", "Null", "None", "0"],
        answerHash: "581089a5226b6356dc231731d80ec0a3",
        difficulty: "Medium"
    },
    {
        id: 86,
        question: "Apa itu 'Epoch' dalam training Neural Network?",
        options: ["Satu putaran penuh seluruh dataset", "Satu batch data", "Satu kali update bobot", "Satu neuron"],
        answerHash: "235051cc55ec32169678d7d5003bba16",
        difficulty: "Medium"
    },
    {
        id: 87,
        question: "Metode untuk membagi data menjadi training dan testing set di Scikit-learn?",
        options: ["train_test_split", "split_data", "data_split", "train_val_test"],
        answerHash: "df3a0cb1f952cd73b7d38cb501813531",
        difficulty: "Medium"
    },
    {
        id: 88,
        question: "Apa output dari 'Python'[::-1]?",
        options: ["nohtyP", "Python", "P", "n"],
        answerHash: "60db1699a88fc474592cc3dc708b2edc",
        difficulty: "Medium"
    },
    {
        id: 89,
        question: "Manakah tipe data yang Immutable (tidak bisa diubah)?",
        options: ["Tuple", "List", "Dictionary", "Set"],
        answerHash: "17d46b560a6535717896feee1d4c22a9",
        difficulty: "Medium"
    },
    {
        id: 90,
        question: "Apa itu 'Confusion Matrix'?",
        options: ["Tabel evaluasi performa klasifikasi", "Matriks acak", "Error pada matriks", "Data yang membingungkan"],
        answerHash: "c3ffd14acba01804b35860dfcdcee30e",
        difficulty: "Medium"
    },
    {
        id: 91,
        question: "Fungsi zip() berguna untuk?",
        options: ["Menggabungkan beberapa iterable", "Kompresi file", "Membuka file zip", "Menghapus elemen"],
        answerHash: "062b1737e3c38e4ebd5d6b050e9b177a",
        difficulty: "Medium"
    },

    // --- ADDITIONAL HARD QUESTIONS (Advanced AI & Python) ---
    {
        id: 92,
        question: "Apa itu 'Gradient Descent'?",
        options: ["Algoritma optimasi untuk meminimalkan loss", "Teknik visualisasi data", "Jenis Neural Network", "Cara membersihkan data"],
        answerHash: "644219369af3b2daf7f77768fe531b03",
        difficulty: "Hard"
    },
    {
        id: 93,
        question: "Fungsi aktivasi yang outputnya antara 0 dan 1 adalah?",
        options: ["Sigmoid", "ReLU", "Tanh", "Linear"],
        answerHash: "f1af5b0357cb1c0ed73648e174ff8742",
        difficulty: "Hard"
    },
    {
        id: 94,
        question: "Apa itu CNN (Convolutional Neural Network) paling cocok untuk?",
        options: ["Pengolahan Citra/Gambar", "Data Teks", "Data Tabular", "Time Series"],
        answerHash: "9edcc1582c60db126afef95aaa209beb",
        difficulty: "Hard"
    },
    {
        id: 95,
        question: "Apa itu RNN (Recurrent Neural Network) paling cocok untuk?",
        options: ["Data Sekuensial/Time Series", "Gambar Statis", "Klasifikasi Gambar", "Clustering"],
        answerHash: "dc7ebc6560cb5aa73c16a87e0efa2c1d",
        difficulty: "Hard"
    },
    {
        id: 96,
        question: "Apa kegunaan 'Dropout' pada Neural Network?",
        options: ["Mencegah Overfitting", "Mempercepat training", "Menambah jumlah neuron", "Mengubah learning rate"],
        answerHash: "ac6ff1ac9bb02d6b3129d776e4781c88",
        difficulty: "Hard"
    },
    {
        id: 97,
        question: "Decorator @staticmethod digunakan untuk?",
        options: ["Membuat method tanpa parameter self", "Membuat class abstract", "Mengubah variabel private", "Membuat property"],
        answerHash: "eb8bb050ea856fbe8f56af99f0fe2615",
        difficulty: "Hard"
    },
    {
        id: 98,
        question: "Apa itu 'Global Interpreter Lock' (GIL) di Python?",
        options: ["Membatasi satu thread berjalan pada satu waktu", "Mengunci file", "Keamanan interpreter", "Optimasi memori"],
        answerHash: "a23c6869ed396c87a2a4350645777872",
        difficulty: "Hard"
    },
    {
        id: 99,
        question: "Manakah yang merupakan library Deep Learning?",
        options: ["TensorFlow", "Requests", "BeautifulSoup", "PyGame"],
        answerHash: "ae72d236300072b2cc3f39c1970d0534",
        difficulty: "Hard"
    },
    {
        id: 100,
        question: "Apa itu 'Hyperparameter'?",
        options: ["Parameter yang diatur sebelum training", "Bobot yang dipelajari model", "Data hasil prediksi", "Nilai error"],
        answerHash: "d1a14d89be61f39c903de94e3fc8cc55",
        difficulty: "Hard"
    },
    {
        id: 101,
        question: "Fungsi __str__ pada class digunakan untuk?",
        options: ["Representasi string dari objek", "Inisialisasi objek", "Menghapus objek", "Operasi matematika"],
        answerHash: "de7c8de22c16c0c6793be3ad23af6cbc",
        difficulty: "Hard"
    },

    // --- BATCH 2: EASY QUESTIONS (Python, AI, DS) ---
    {
        id: 102,
        question: "Apa fungsi dari perintah 'import' di Python?",
        options: ["Memasukkan modul/library", "Menghapus modul", "Membuat fungsi", "Menjalankan loop"],
        answerHash: "9b842e354f3fccd8623f1c543c97a57e",
        difficulty: "Easy"
    },
    {
        id: 103,
        question: "Manakah yang merupakan tipe data sequence di Python?",
        options: ["List", "Integer", "Float", "Boolean"],
        answerHash: "f497b33f6b3f7eefa344843cce5377ec",
        difficulty: "Easy"
    },
    {
        id: 104,
        question: "Apa output dari print(2 ** 3)?",
        options: ["8", "6", "5", "9"],
        answerHash: "37b2ee951fd5b0b9566088436609a90d",
        difficulty: "Easy"
    },
    {
        id: 105,
        question: "Library Python untuk web scraping adalah?",
        options: ["BeautifulSoup", "NumPy", "Pandas", "Matplotlib"],
        answerHash: "eaf6374496747cf258b7aa8f922e2c50",
        difficulty: "Easy"
    },
    {
        id: 106,
        question: "Apa itu 'NLP' dalam AI?",
        options: ["Natural Language Processing", "Neural Language Programming", "New Learning Process", "Network Level Protocol"],
        answerHash: "e6c7da51430824d318e35a6bd279d871",
        difficulty: "Easy"
    },
    {
        id: 107,
        question: "Manakah yang termasuk algoritma Sorting?",
        options: ["Bubble Sort", "Linear Search", "Binary Search", "K-Means"],
        answerHash: "1a63e15386b509f30bc7b5550266c15b",
        difficulty: "Easy"
    },
    {
        id: 108,
        question: "Fungsi abs(-5) akan menghasilkan?",
        options: ["5", "-5", "0", "Error"],
        answerHash: "34ab5da3f1d3b032b546788f1e03e34f",
        difficulty: "Easy"
    },
    {
        id: 109,
        question: "Apa itu 'Big Data'?",
        options: ["Data dalam jumlah sangat besar dan kompleks", "Data kecil", "Data kosong", "Database lokal"],
        answerHash: "18f9464f83e40b45e26d4bfb47d677eb",
        difficulty: "Easy"
    },
    {
        id: 110,
        question: "Manakah cloud provider yang populer untuk AI?",
        options: ["AWS", "Photoshop", "WinRAR", "VLC"],
        answerHash: "5d91853843cca68cdf49b4b266489baf",
        difficulty: "Easy"
    },
    {
        id: 111,
        question: "Apa kegunaan Jupyter Notebook?",
        options: ["Membuat dokumen interaktif dengan kode", "Mengedit video", "Membuat musik", "Desain grafis"],
        answerHash: "86ca6abcdd546f2efece16776278af88",
        difficulty: "Easy"
    },
    {
        id: 112,
        question: "Simbol untuk operator logika 'ATAU' di Python adalah?",
        options: ["or", "||", "&", "and"],
        answerHash: "4690858713437517178225211933923d",
        difficulty: "Easy"
    },
    {
        id: 113,
        question: "Apa itu 'API'?",
        options: ["Application Programming Interface", "Apple Programming Inc", "Automated Process Integration", "Advanced Program Instruction"],
        answerHash: "4199859265e3153c072c577027179b0c",
        difficulty: "Easy"
    },
    {
        id: 114,
        question: "Manakah yang merupakan framework web Python?",
        options: ["Django", "React", "Angular", "Laravel"],
        answerHash: "2638428257007632617637f717d59837",
        difficulty: "Easy"
    },
    {
        id: 115,
        question: "Apa itu 'JSON'?",
        options: ["JavaScript Object Notation", "Java System On Network", "Just Some Object Name", "Joint System Of Nodes"],
        answerHash: "2449770150965e638210339031070860",
        difficulty: "Easy"
    },
    {
        id: 116,
        question: "Fungsi round(3.7) menghasilkan?",
        options: ["4", "3", "3.5", "Error"],
        answerHash: "0f438865324316377651a77421882142",
        difficulty: "Easy"
    },
    {
        id: 117,
        question: "Apa itu 'Open Source'?",
        options: ["Kode sumber terbuka untuk umum", "Software berbayar", "Kode rahasia", "Sistem operasi tertutup"],
        answerHash: "30325d97272205096464879326d9c882",
        difficulty: "Easy"
    },
    {
        id: 118,
        question: "Manakah yang merupakan database SQL?",
        options: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"],
        answerHash: "a9986348421870ad467000d0216654b1",
        difficulty: "Easy"
    },
    {
        id: 119,
        question: "Apa itu 'Git'?",
        options: ["Version Control System", "Bahasa Pemrograman", "Text Editor", "Operating System"],
        answerHash: "207c4581177658702b80362227274092",
        difficulty: "Easy"
    },
    {
        id: 120,
        question: "Perintah untuk membuat folder baru di terminal adalah?",
        options: ["mkdir", "touch", "cd", "ls"],
        answerHash: "e5021204646535560945532598393c09",
        difficulty: "Easy"
    }
];

export default bankSoal;
