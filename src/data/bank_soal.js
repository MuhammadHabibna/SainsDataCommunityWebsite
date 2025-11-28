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
    }
];

export default bankSoal;
