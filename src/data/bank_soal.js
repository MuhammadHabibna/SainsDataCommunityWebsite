const bankSoal = [
    // --- EASY (Dasar-dasar Python) ---
    {
        id: 1,
        question: "Bagaimana cara mencetak 'Hello World' di Python?",
        options: ["print('Hello World')", "echo 'Hello World'", "console.log('Hello World')", "System.out.println('Hello World')"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 2,
        question: "Manakah yang merupakan tipe data untuk angka bulat?",
        options: ["float", "int", "str", "bool"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 3,
        question: "Simbol untuk komentar satu baris di Python adalah?",
        options: ["//", "/* */", "#", "--"],
        answer: 2,
        difficulty: "Easy"
    },
    {
        id: 4,
        question: "Bagaimana cara membuat variabel x bernilai 5?",
        options: ["int x = 5;", "x = 5", "var x = 5;", "let x = 5;"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 5,
        question: "Operator aritmatika untuk pangkat adalah?",
        options: ["^", "**", "//", "%"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 6,
        question: "Manakah penulisan boolean yang benar di Python?",
        options: ["true", "True", "TRUE", "1"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 7,
        question: "Apa output dari len('Python')?",
        options: ["5", "6", "7", "Error"],
        answer: 1,
        difficulty: "Easy"
    },

    // --- MEDIUM (Struktur Data & Kontrol Alur) ---
    {
        id: 8,
        question: "Bagaimana cara membuat list kosong?",
        options: ["list = ()", "list = []", "list = {}", "list = new List()"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 9,
        question: "Keyword untuk mendefinisikan fungsi adalah?",
        options: ["func", "def", "function", "void"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 10,
        question: "Bagaimana cara mengakses elemen pertama dari list 'my_list'?",
        options: ["my_list[1]", "my_list(0)", "my_list[0]", "my_list.first()"],
        answer: 2,
        difficulty: "Medium"
    },
    {
        id: 11,
        question: "Apa output dari print(10 // 3)?",
        options: ["3.33", "3", "4", "3.0"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 12,
        question: "Manakah library populer untuk manipulasi data tabel?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 13,
        question: "Method untuk menambahkan elemen ke akhir list adalah?",
        options: ["add()", "insert()", "push()", "append()"],
        answer: 3,
        difficulty: "Medium"
    },
    {
        id: 14,
        question: "Apa hasil dari 'a' + 'b'?",
        options: ["ab", "error", "9798", "['a', 'b']"],
        answer: 0,
        difficulty: "Medium"
    },

    // --- HARD (Konsep Lanjutan & Library) ---
    {
        id: 15,
        question: "Apa output dari [x**2 for x in range(3)]?",
        options: ["[1, 2, 3]", "[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 16,
        question: "Manakah yang merupakan mutable data type?",
        options: ["tuple", "string", "list", "int"],
        answer: 2,
        difficulty: "Hard"
    },
    {
        id: 17,
        question: "Keyword 'lambda' digunakan untuk membuat?",
        options: ["Loop", "Anonymous Function", "Class", "Module"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 18,
        question: "Apa kegunaan 'try-except' block?",
        options: ["Looping", "Error Handling", "File I/O", "Multithreading"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 19,
        question: "Di Pandas, fungsi untuk membaca file CSV adalah?",
        options: ["pd.read_csv()", "pd.import_csv()", "pd.load_csv()", "pd.csv_read()"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 20,
        question: "Apa output dari print(set([1, 2, 2, 3]))?",
        options: ["[1, 2, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{1, 2, 2, 3}"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 21,
        question: "Manakah cara yang benar untuk slicing list my_list dari index 1 sampai akhir?",
        options: ["my_list[1:]", "my_list[:1]", "my_list[1:-1]", "my_list[::1]"],
        answer: 0,
        difficulty: "Hard"
    },

    // --- NEW EASY QUESTIONS ---
    {
        id: 22,
        question: "Apa output dari print(2 * 3)?",
        options: ["5", "6", "23", "Error"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 23,
        question: "Tipe data dari 'Hello' adalah?",
        options: ["int", "float", "str", "bool"],
        answer: 2,
        difficulty: "Easy"
    },
    {
        id: 24,
        question: "Operator untuk sisa bagi (modulus) adalah?",
        options: ["/", "%", "//", "*"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 25,
        question: "Nilai boolean False di Python ditulis sebagai?",
        options: ["false", "False", "FALSE", "0"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 26,
        question: "Fungsi untuk meminta input dari user adalah?",
        options: ["scan()", "get()", "input()", "read()"],
        answer: 2,
        difficulty: "Easy"
    },
    {
        id: 27,
        question: "Fungsi untuk mengubah string menjadi integer adalah?",
        options: ["str()", "float()", "int()", "char()"],
        answer: 2,
        difficulty: "Easy"
    },
    {
        id: 28,
        question: "Operator perbandingan 'sama dengan' adalah?",
        options: ["=", "==", ":=", "==="],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 29,
        question: "Apa output dari type(3.14)?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        answer: 1,
        difficulty: "Easy"
    },
    {
        id: 30,
        question: "Index pertama dalam string atau list dimulai dari?",
        options: ["0", "1", "-1", "2"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 31,
        question: "Manakah nama variabel yang TIDAK valid?",
        options: ["nama_saya", "namaSaya", "1nama", "_nama"],
        answer: 2,
        difficulty: "Easy"
    },

    // --- NEW MEDIUM QUESTIONS ---
    {
        id: 32,
        question: "Method untuk menghapus elemen spesifik dari list adalah?",
        options: ["delete()", "remove()", "erase()", "cut()"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 33,
        question: "Bagaimana cara menambahkan key 'umur' dengan nilai 20 ke dictionary 'data'?",
        options: ["data.add('umur', 20)", "data['umur'] = 20", "data.append('umur', 20)", "data.insert('umur', 20)"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 34,
        question: "Apa isi dari list(range(3))?",
        options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 35,
        question: "Apa output dari len([10, 20, 30])?",
        options: ["2", "3", "30", "Error"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 36,
        question: "Operator untuk menggabungkan dua list adalah?",
        options: ["*", "-", "+", "/"],
        answer: 2,
        difficulty: "Medium"
    },
    {
        id: 37,
        question: "Untuk mengecek apakah key ada di dictionary, gunakan keyword?",
        options: ["exists", "has", "in", "check"],
        answer: 2,
        difficulty: "Medium"
    },
    {
        id: 38,
        question: "Jika fungsi tidak memiliki return statement, apa yang dikembalikan?",
        options: ["0", "False", "None", "Error"],
        answer: 2,
        difficulty: "Medium"
    },
    {
        id: 39,
        question: "Apa hasil slicing [10, 20, 30, 40][1:3]?",
        options: ["[20, 30]", "[10, 20]", "[20, 30, 40]", "[30, 40]"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 40,
        question: "Method string untuk mengubah huruf menjadi kapital semua adalah?",
        options: ["toUpper()", "upper()", "capitalize()", "uppercase()"],
        answer: 1,
        difficulty: "Medium"
    },
    {
        id: 41,
        question: "Loop 'while' akan berjalan selama kondisinya?",
        options: ["False", "True", "None", "0"],
        answer: 1,
        difficulty: "Medium"
    },

    // --- NEW HARD QUESTIONS ---
    {
        id: 42,
        question: "Simbol untuk decorator di Python adalah?",
        options: ["#", "$", "@", "&"],
        answer: 2,
        difficulty: "Hard"
    },
    {
        id: 43,
        question: "Method spesial untuk constructor class adalah?",
        options: ["__init__", "__create__", "__new__", "__start__"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 44,
        question: "Bagaimana cara class Child mewarisi class Parent?",
        options: ["class Child extends Parent:", "class Child(Parent):", "class Child implements Parent:", "class Child : Parent"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 45,
        question: "Fungsi map(func, iterable) berguna untuk?",
        options: ["Menyaring data", "Mengaplikasikan fungsi ke setiap elemen", "Mengurutkan data", "Menghapus data"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 46,
        question: "Fungsi filter(func, iterable) berguna untuk?",
        options: ["Mengubah data", "Menyaring elemen berdasarkan kondisi", "Menjumlahkan data", "Membagi data"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 47,
        question: "Parameter *args digunakan untuk?",
        options: ["Keyword arguments", "Variable length positional arguments", "Default arguments", "Required arguments"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 48,
        question: "Parameter **kwargs digunakan untuk?",
        options: ["Variable length keyword arguments", "List arguments", "Tuple arguments", "String arguments"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 49,
        question: "Perbedaan 'is' dan '==' adalah?",
        options: ["Sama saja", "'is' cek identity (memory), '==' cek value", "'is' cek value, '==' cek identity", "'is' untuk angka, '==' untuk string"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 50,
        question: "Keyword 'yield' digunakan dalam?",
        options: ["Loop", "Generator function", "Class", "Import"],
        answer: 1,
        difficulty: "Hard"
    },
    {
        id: 51,
        question: "Keyword 'with' biasanya digunakan untuk?",
        options: ["Looping", "Context Manager (misal buka file)", "Definisi fungsi", "Kondisi if"],
        answer: 1,
        difficulty: "Hard"
    },
    // --- ADDITIONAL EASY QUESTIONS (Python & Data Science Basics) ---
    {
        id: 52,
        question: "Siapa pencipta bahasa pemrograman Python?",
        options: ["Guido van Rossum", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 53,
        question: "Ekstensi file kode Python adalah?",
        options: [".py", ".java", ".cpp", ".html"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 54,
        question: "Library Python populer untuk visualisasi data adalah?",
        options: ["Matplotlib", "Requests", "Flask", "Django"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 55,
        question: "Apa kepanjangan dari AI?",
        options: ["Artificial Intelligence", "Automated Interface", "Apple Inc.", "Advanced Integration"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 56,
        question: "Apa kepanjangan dari ML dalam konteks data?",
        options: ["Machine Learning", "Markup Language", "Mobile Legends", "Main Loop"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 57,
        question: "Manakah yang merupakan contoh Supervised Learning?",
        options: ["Klasifikasi Email Spam", "Clustering Customer", "Reinforcement Learning", "Dimensionality Reduction"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 58,
        question: "Library Python untuk komputasi numerik dan array multidimensi adalah?",
        options: ["NumPy", "Pandas", "Seaborn", "Keras"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 59,
        question: "Perintah untuk menginstall library Python via terminal adalah?",
        options: ["pip install nama_paket", "npm install nama_paket", "apt-get install", "python add nama_paket"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 60,
        question: "Tipe data untuk teks di Python disebut?",
        options: ["String", "Integer", "Boolean", "Float"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 61,
        question: "Manakah format file notebook yang sering digunakan Data Scientist?",
        options: [".ipynb", ".docx", ".exe", ".mp4"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 62,
        question: "Apa output dari 10 % 3?",
        options: ["1", "3", "0", "3.33"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 63,
        question: "Simbol untuk membuat list di Python adalah?",
        options: ["[]", "{}", "()", "<>"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 64,
        question: "Simbol untuk membuat dictionary di Python adalah?",
        options: ["{}", "[]", "()", "//"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 65,
        question: "Manakah yang BUKAN tipe data dasar di Python?",
        options: ["Array", "Integer", "Float", "String"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 66,
        question: "Fungsi untuk menampilkan teks ke layar adalah?",
        options: ["print()", "echo()", "display()", "write()"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 67,
        question: "Apa itu 'Bug' dalam pemrograman?",
        options: ["Kesalahan dalam kode", "Fitur rahasia", "Jenis variabel", "Nama library"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 68,
        question: "Proses memperbaiki error dalam kode disebut?",
        options: ["Debugging", "Coding", "Deploying", "Compiling"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 69,
        question: "Manakah operator logika di Python?",
        options: ["and", "&&", "||", "!"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 70,
        question: "Apa hasil dari bool(0)?",
        options: ["False", "True", "None", "Error"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 71,
        question: "Apa hasil dari bool(1)?",
        options: ["True", "False", "None", "Error"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 72,
        question: "Untuk membuat komentar banyak baris (docstring) digunakan?",
        options: ["''' text '''", "// text", "# text", "<!-- text -->"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 73,
        question: "Manakah library untuk Machine Learning klasik?",
        options: ["Scikit-learn", "React", "Vue", "Laravel"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 74,
        question: "Apa itu CSV?",
        options: ["Comma Separated Values", "Computer System Video", "Code Syntax Verification", "Central Service View"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 75,
        question: "Fungsi range(5) menghasilkan urutan?",
        options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 76,
        question: "Operator 'tidak sama dengan' di Python adalah?",
        options: ["!=", "<>", "!==", "not ="],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 77,
        question: "Keyword untuk menghentikan loop seketika adalah?",
        options: ["break", "stop", "exit", "pause"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 78,
        question: "Keyword untuk melanjutkan ke iterasi berikutnya adalah?",
        options: ["continue", "next", "skip", "pass"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 79,
        question: "Apa itu 'Syntax Error'?",
        options: ["Kesalahan penulisan kode", "Kesalahan logika", "Kesalahan saat runtime", "Kesalahan hardware"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 80,
        question: "Manakah yang merupakan IDE atau Text Editor untuk Python?",
        options: ["VS Code", "Photoshop", "Excel", "PowerPoint"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 81,
        question: "Variabel di Python bersifat case-sensitive, artinya?",
        options: ["Huruf besar dan kecil dibedakan", "Hanya huruf kecil", "Hanya huruf besar", "Tidak peduli huruf besar/kecil"],
        answer: 0,
        difficulty: "Easy"
    },

    // --- ADDITIONAL MEDIUM QUESTIONS (Data Science & Logic) ---
    {
        id: 82,
        question: "Apa itu Overfitting dalam Machine Learning?",
        options: ["Model terlalu hafal data latih", "Model terlalu sederhana", "Data tidak cukup", "Model tidak bisa belajar"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 83,
        question: "Apa kegunaan fungsi 'groupby' di Pandas?",
        options: ["Mengelompokkan data berdasarkan kategori", "Mengurutkan data", "Menghapus data duplikat", "Menggabungkan dua tabel"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 84,
        question: "Manakah cara penulisan List Comprehension yang benar?",
        options: ["[x for x in data]", "(x for x in data)", "{x for x in data}", "list(x in data)"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 85,
        question: "Apa nilai default untuk missing value di Pandas?",
        options: ["NaN", "Null", "None", "0"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 86,
        question: "Apa itu 'Epoch' dalam training Neural Network?",
        options: ["Satu putaran penuh seluruh dataset", "Satu batch data", "Satu kali update bobot", "Satu neuron"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 87,
        question: "Metode untuk membagi data menjadi training dan testing set di Scikit-learn?",
        options: ["train_test_split", "split_data", "data_split", "train_val_test"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 88,
        question: "Apa output dari 'Python'[::-1]?",
        options: ["nohtyP", "Python", "P", "n"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 89,
        question: "Manakah tipe data yang Immutable (tidak bisa diubah)?",
        options: ["Tuple", "List", "Dictionary", "Set"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 90,
        question: "Apa itu 'Confusion Matrix'?",
        options: ["Tabel evaluasi performa klasifikasi", "Matriks acak", "Error pada matriks", "Data yang membingungkan"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 91,
        question: "Fungsi zip() berguna untuk?",
        options: ["Menggabungkan beberapa iterable", "Kompresi file", "Membuka file zip", "Menghapus elemen"],
        answer: 0,
        difficulty: "Medium"
    },

    // --- ADDITIONAL HARD QUESTIONS (Advanced AI & Python) ---
    {
        id: 92,
        question: "Apa itu 'Gradient Descent'?",
        options: ["Algoritma optimasi untuk meminimalkan loss", "Teknik visualisasi data", "Jenis Neural Network", "Cara membersihkan data"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 93,
        question: "Fungsi aktivasi yang outputnya antara 0 dan 1 adalah?",
        options: ["Sigmoid", "ReLU", "Tanh", "Linear"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 94,
        question: "Apa itu CNN (Convolutional Neural Network) paling cocok untuk?",
        options: ["Pengolahan Citra/Gambar", "Data Teks", "Data Tabular", "Time Series"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 95,
        question: "Apa itu RNN (Recurrent Neural Network) paling cocok untuk?",
        options: ["Data Sekuensial/Time Series", "Gambar Statis", "Klasifikasi Gambar", "Clustering"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 96,
        question: "Apa kegunaan 'Dropout' pada Neural Network?",
        options: ["Mencegah Overfitting", "Mempercepat training", "Menambah jumlah neuron", "Mengubah learning rate"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 97,
        question: "Decorator @staticmethod digunakan untuk?",
        options: ["Membuat method tanpa parameter self", "Membuat class abstract", "Mengubah variabel private", "Membuat property"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 98,
        question: "Apa itu 'Global Interpreter Lock' (GIL) di Python?",
        options: ["Membatasi satu thread berjalan pada satu waktu", "Mengunci file", "Keamanan interpreter", "Optimasi memori"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 99,
        question: "Manakah yang merupakan library Deep Learning?",
        options: ["TensorFlow", "Requests", "BeautifulSoup", "PyGame"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 100,
        question: "Apa itu 'Hyperparameter'?",
        options: ["Parameter yang diatur sebelum training", "Bobot yang dipelajari model", "Data hasil prediksi", "Nilai error"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 101,
        question: "Fungsi __str__ pada class digunakan untuk?",
        options: ["Representasi string dari objek", "Inisialisasi objek", "Menghapus objek", "Operasi matematika"],
        answer: 0,
        difficulty: "Hard"
    },

    // --- BATCH 2: EASY QUESTIONS (Python, AI, DS) ---
    {
        id: 102,
        question: "Apa fungsi dari perintah 'import' di Python?",
        options: ["Memasukkan modul/library", "Menghapus modul", "Membuat fungsi", "Menjalankan loop"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 103,
        question: "Manakah yang merupakan tipe data sequence di Python?",
        options: ["List", "Integer", "Float", "Boolean"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 104,
        question: "Apa output dari print(2 ** 3)?",
        options: ["8", "6", "5", "9"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 105,
        question: "Library Python untuk web scraping adalah?",
        options: ["BeautifulSoup", "NumPy", "Pandas", "Matplotlib"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 106,
        question: "Apa itu 'NLP' dalam AI?",
        options: ["Natural Language Processing", "Neural Language Programming", "New Learning Process", "Network Level Protocol"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 107,
        question: "Manakah yang termasuk algoritma Sorting?",
        options: ["Bubble Sort", "Linear Search", "Binary Search", "K-Means"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 108,
        question: "Fungsi abs(-5) akan menghasilkan?",
        options: ["5", "-5", "0", "Error"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 109,
        question: "Apa itu 'Big Data'?",
        options: ["Data dalam jumlah sangat besar dan kompleks", "Data kecil", "Data kosong", "Database lokal"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 110,
        question: "Manakah cloud provider yang populer untuk AI?",
        options: ["AWS", "Photoshop", "WinRAR", "VLC"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 111,
        question: "Apa kegunaan Jupyter Notebook?",
        options: ["Membuat dokumen interaktif dengan kode", "Mengedit video", "Membuat musik", "Desain grafis"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 112,
        question: "Simbol untuk operator logika 'ATAU' di Python adalah?",
        options: ["or", "||", "&", "and"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 113,
        question: "Apa output dari 'Hello'.lower()?",
        options: ["hello", "HELLO", "Hello", "hELLO"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 114,
        question: "Manakah yang merupakan framework web Python?",
        options: ["Django", "React", "Angular", "Spring"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 115,
        question: "Apa itu 'IoT'?",
        options: ["Internet of Things", "Input of Text", "Internal of Technology", "Image of Time"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 116,
        question: "Fungsi max([1, 5, 3]) menghasilkan?",
        options: ["5", "1", "3", "Error"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 117,
        question: "Apa itu 'Chatbot'?",
        options: ["Program komputer untuk simulasi percakapan", "Robot fisik", "Aplikasi chat biasa", "Virus komputer"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 118,
        question: "Manakah yang merupakan tipe data mapping di Python?",
        options: ["Dictionary", "List", "Tuple", "Set"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 119,
        question: "Apa output dari round(3.7)?",
        options: ["4", "3", "3.5", "3.0"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 120,
        question: "Apa itu 'Open Source'?",
        options: ["Kode sumber terbuka untuk umum", "Kode rahasia", "Software berbayar", "Virus"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 121,
        question: "Manakah ekstensi file gambar?",
        options: [".png", ".py", ".txt", ".csv"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 122,
        question: "Apa fungsi dari komentar di kode?",
        options: ["Menjelaskan kode", "Menjalankan kode", "Menghapus kode", "Mempercepat kode"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 123,
        question: "Apa itu 'Pixel'?",
        options: ["Elemen terkecil gambar digital", "Bahasa pemrograman", "Jenis monitor", "Ukuran file"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 124,
        question: "Manakah yang merupakan OS (Operating System)?",
        options: ["Linux", "Python", "Chrome", "Word"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 125,
        question: "Apa itu 'Database'?",
        options: ["Tempat penyimpanan data terstruktur", "Tempat sampah file", "Aplikasi edit foto", "Game"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 126,
        question: "Perintah 'cd' di terminal digunakan untuk?",
        options: ["Pindah direktori", "Membuat direktori", "Menghapus file", "Melihat isi file"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 127,
        question: "Apa itu 'Algorithm'?",
        options: ["Langkah-langkah penyelesaian masalah", "Bahasa pemrograman", "Komputer canggih", "Internet"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 128,
        question: "Manakah yang merupakan browser web?",
        options: ["Firefox", "Python", "Java", "C++"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 129,
        question: "Apa itu 'Server'?",
        options: ["Komputer penyedia layanan", "Komputer pengguna", "Kabel internet", "Mouse"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 130,
        question: "Apa output dari 5 == 5?",
        options: ["True", "False", "5", "Error"],
        answer: 0,
        difficulty: "Easy"
    },
    {
        id: 131,
        question: "Manakah yang merupakan input device?",
        options: ["Keyboard", "Monitor", "Speaker", "Printer"],
        answer: 0,
        difficulty: "Easy"
    },

    // --- BATCH 2: MEDIUM QUESTIONS (Data Science & Logic) ---
    {
        id: 132,
        question: "Apa itu 'Data Cleaning'?",
        options: ["Proses membersihkan data dari error/duplikat", "Menghapus semua data", "Memformat harddisk", "Menginstall antivirus"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 133,
        question: "Library Python untuk visualisasi data statistik yang cantik adalah?",
        options: ["Seaborn", "NumPy", "Requests", "OS"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 134,
        question: "Apa itu 'Outlier' dalam data?",
        options: ["Data yang menyimpang jauh dari rata-rata", "Data yang paling sering muncul", "Data yang hilang", "Data teks"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 135,
        question: "Method list.pop() digunakan untuk?",
        options: ["Menghapus dan mengambil elemen terakhir", "Menambah elemen", "Mengurutkan list", "Menghitung panjang list"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 136,
        question: "Apa itu 'Correlation'?",
        options: ["Hubungan antara dua variabel", "Perbedaan data", "Jumlah data", "Rata-rata data"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 137,
        question: "Fungsi sorted([3, 1, 2]) menghasilkan?",
        options: ["[1, 2, 3]", "[3, 2, 1]", "[3, 1, 2]", "Error"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 138,
        question: "Apa itu 'Feature Engineering'?",
        options: ["Membuat fitur baru dari data yang ada", "Membeli fitur", "Menghapus fitur", "Memperbaiki komputer"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 139,
        question: "Manakah yang merupakan Unsupervised Learning?",
        options: ["K-Means Clustering", "Linear Regression", "Logistic Regression", "Decision Tree"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 140,
        question: "Apa kegunaan 'SQL'?",
        options: ["Bahasa untuk mengelola database", "Bahasa pemrograman game", "Sistem operasi", "Editor teks"],
        answer: 0,
        difficulty: "Medium"
    },
    {
        id: 141,
        question: "Apa output dari ' '.join(['a', 'b', 'c'])?",
        options: ["'a b c'", "'abc'", "'a,b,c'", "['a', 'b', 'c']"],
        answer: 0,
        difficulty: "Medium"
    },

    // --- BATCH 2: HARD QUESTIONS (Advanced AI & Python) ---
    {
        id: 142,
        question: "Apa itu 'Transfer Learning'?",
        options: ["Menggunakan model pre-trained untuk tugas baru", "Mentransfer file", "Belajar dari buku", "Mengcopy kode"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 143,
        question: "Apa fungsi dari 'Loss Function'?",
        options: ["Mengukur seberapa jauh prediksi dari target", "Menghitung keuntungan", "Menghapus data", "Membuat grafik"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 144,
        question: "Apa itu 'Backpropagation'?",
        options: ["Algoritma untuk menghitung gradien error", "Maju ke depan", "Menyimpan data", "Membuat website"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 145,
        question: "Manakah yang merupakan teknik Regularization?",
        options: ["L1 & L2 Regularization", "Linear Search", "Bubble Sort", "Print Debugging"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 146,
        question: "Apa itu 'GAN' (Generative Adversarial Network)?",
        options: ["Dua neural network yang berkompetisi (Generator vs Discriminator)", "Jaringan internet", "Game online", "Virus"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 147,
        question: "Apa kegunaan 'Pickle' di Python?",
        options: ["Serialisasi objek Python", "Membuat acar", "Mengedit gambar", "Membuat game"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 148,
        question: "Apa itu 'Bias' dalam Machine Learning?",
        options: ["Asumsi yang dibuat oleh model untuk menyederhanakan fungsi target", "Kesalahan hardware", "Data yang benar", "Kecepatan training"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 149,
        question: "Apa itu 'Variance' dalam Machine Learning?",
        options: ["Sensitivitas model terhadap fluktuasi data training", "Rata-rata data", "Jumlah data", "Waktu training"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 150,
        question: "Metode '__call__' memungkinkan objek untuk?",
        options: ["Dipanggil seperti fungsi", "Dihapus", "Dicetak", "Diubah menjadi string"],
        answer: 0,
        difficulty: "Hard"
    },
    {
        id: 151,
        question: "Apa itu 'Reinforcement Learning'?",
        options: ["Belajar dari interaksi dan reward/punishment", "Belajar dari buku", "Belajar sendiri", "Tidak belajar"],
        answer: 0,
        difficulty: "Hard"
    }
];

export default bankSoal;
