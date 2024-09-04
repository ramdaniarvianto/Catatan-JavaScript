// DOM Tree

// NodeList vs. HTMLCollection
// - keduanya merupakan kumpulan node
// - strukturnya mirip dengan array
// - NodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen HTML
// - HTMLCollection bersifat live, sedangkan NodeList tidak

// Struktur Hierarki DOM Tree
// - Root Node
//   - node yang menjadi sumber dari semua node lain di dalam DOM
//   - secara default, node tersebut adalah document
// - Parent Node
//   - node yang berada 1 tingkat di atas node yang lain
//   - body adalah parent dari h1, p, div, dan a
// - Child Node
//   - node yang berada 1 tingkat dibawah node yang lain
//   - h1 adalah child dari body