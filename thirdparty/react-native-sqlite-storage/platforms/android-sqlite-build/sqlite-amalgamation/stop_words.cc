#include <string>
#include <set>
const char* STOP_WORDS[] = {
"all",
"and",
"any",
"are",
"at",
"but",
"can",
"cannot",
"cant",
"com",
"did",
"does",
"doesn't",
"doing",
"done",
"don",
"edu",
"etc",
"even",
"ever",
"far",
"few",
"for",
"get",
"got",
"gotten",
"had",
"hadn",
"has",
"her",
"him",
"his",
"how",
"in",
"inc",
"into",
"its",
"let",
"ltd",
"may",
"maybe",
"mean",
"more",
"most",
"mostly",
"much",
"must",
"myself",
"name",
"namely",
"near",
"nearly",
"need",
"needs",
"neither",
"never",
"new",
"next",
"nine",
"no",
"nobody",
"non",
"none",
"nor",
"not",
"nothing",
"novel",
"now",
"of",
"off",
"often",
"oh",
"ok",
"okay",
"old",
"on",
"once",
"one",
"ones",
"only",
"onto",
"other",
"others",
"ought",
"our",
"ours",
"out",
"over",
"own",
"per",
"plus",
"que",
"quite",
"qv",
"rather",
"rd",
"re",
"said",
"same",
"saw",
"say",
"says",
"see",
"sent",
"she",
"since",
"six",
"so",
"some",
"soon",
"sorry",
"still",
"sub",
"such",
"sup",
"sure",
"take",
"taken",
"tell",
"tends",
"than",
"thank",
"thanks",
"thanx",
"that",
"thats",
"that's",
"the",
"their",
"theirs",
"them",
"themselves",
"then",
"thence",
"there",
"thereafter",
"thereby",
"therefore",
"therein",
"theres",
"there's",
"thereupon",
"these",
"they",
"they'd",
"they'll",
"they're",
"they've",
"think",
"third",
"this",
"thorough",
"thoroughly",
"those",
"though",
"three",
"through",
"throughout",
"thru",
"thus",
"to",
"together",
"too",
"took",
"toward",
"towards",
"tried",
"tries",
"truly",
"try",
"trying",
"t's",
"twice",
"two",
"un",
"under",
"upon",
"us",
"use",
"used",
"useful",
"uses",
"using",
"usually",
"value",
"various",
"very",
"via",
"viz",
"vs",
"want",
"wants",
"was",
"wasn't",
"way",
"we",
"we'd",
"welcome",
"well",
"we'll",
"went",
"were",
"we're",
"weren't",
"we've",
"what",
"whatever",
"what's",
"when",
"whence",
"whenever",
"where",
"whereafter",
"whereas",
"whereby",
"wherein",
"where's",
"whereupon",
"wherever",
"whether",
"which",
"while",
"whither",
"who",
"whoever",
"whole",
"whom",
"who's",
"whose",
"why",
"will",
"willing",
"wish",
"with",
"within",
"without",
"wonder",
"won't",
"would",
"wouldn't",
"yes",
"yet",
"you",
"you'd",
"you'll",
"your",
"you're",
"yours",
"yourself",
"yourselves",
"you've",
"zero",
"zt",
"ZT",
"zz",
"ZZ",
NULL,
};


class StopWords {
  std::set<std::string> m_words;
public:
  StopWords() {
    const char** words = STOP_WORDS;
    while (*words) {
      //
      m_words.insert(std::string(*words));
      words++;
      //
    }
  }
  //
  bool isStopWord(const char* word) {
    return m_words.find(std::string(word)) != m_words.end();
  }
  bool isStopWord(const std::string& word) {
    return m_words.find(word) != m_words.end();
  }
};

static StopWords g_stopWords;

bool isStopWord(const char* word) {
  return g_stopWords.isStopWord(word);
}

bool isStopWord(const char* word, int len) {
  //
  std::string text(word, len);
  //
  return g_stopWords.isStopWord(text);
}