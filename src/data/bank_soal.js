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
    }
];

export default bankSoal;
