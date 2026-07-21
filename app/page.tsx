const Arrow = () => <span aria-hidden="true">↗</span>;

const links = [
  { label: "블로그", sub: "긴 호흡으로 기록한 삶과 여행", href: "https://blog.naver.com/", mark: "B" },
  { label: "Threads", sub: "매일 다시 나로 돌아오는 문장", href: "https://www.threads.net/@shineforest27", mark: "@" },
  { label: "Instagram", sub: "제주에서 발견한 반짝이는 순간", href: "https://www.instagram.com/shineforest27/", mark: "I" },
];

const books = [
  {
    title: "초등 긍정확언 일력 365",
    desc: "아이의 마음 근육을 키우는 하루 한 문장",
    href: "https://m.yes24.com/goods/detail/162293954",
    tone: "sun",
    cover: null,
  },
  {
    title: "아무튼, 해봤습니다.",
    desc: "열다섯 작가가 건네는 용기와 시작의 기록",
    href: "https://m.yes24.com/goods/detail/162293954",
    tone: "night",
    cover: "/book-anyway.png",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="샤인포레스트 홈">
          <img src="/shineforest-logo.jpg" alt="" />
          <span>SHINE FOREST</span>
        </a>
        <nav aria-label="페이지 메뉴">
          <a href="#story">이야기</a><a href="#books">책</a><a href="#links">채널</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">WRITER · TEACHER · TRAVELER</p>
          <h1>삶을 여행처럼<br /><em>기록하는 사람</em></h1>
          <p className="intro">흔들릴 때마다, 다시 나로 돌아오는 문장을 씁니다.<br />아이와 어른의 오늘에 작은 빛이 되는 이야기를 전합니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="#books">책 만나보기 <Arrow /></a>
            <a className="text-link" href="#links">글 읽으러 가기 <Arrow /></a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="샤인포레스트 작가 황수빈">
          <div className="sun-disc" />
          <img className="portrait" src="/profile-threads.png" alt="노란 원피스를 입고 숲과 호수 앞에 선 샤인포레스트 작가" />
          <div className="stamp">shine<br />forest<br /><b>27</b></div>
        </div>
      </section>

      <section className="manifesto" id="story">
        <div className="shell manifesto-inner">
          <span className="quote-mark">“</span>
          <p>문장은 길을 만들고,<br />기록은 나를 다시 자라게 합니다.</p>
          <span className="signature">— 샤인포레스트</span>
        </div>
      </section>

      <section className="books shell" id="books">
        <div className="section-head">
          <div><p className="eyebrow">BOOKS</p><h2>책으로 건네는 문장</h2></div>
          <p>아이와 나, 삶을 단단하게 만드는<br />다정한 기록을 만나보세요.</p>
        </div>
        <div className="book-grid">
          {books.map((book, i) => (
            <article className={`book-card ${book.tone}`} key={book.title}>
              <div className="book-visual">
                {book.cover ? <img src={book.cover} alt={`${book.title} 표지`} /> : (
                  <div className="calendar-cover"><span>초등<br /><b>긍정확언</b><br />일력 365</span><small>오늘의 나를 믿게 하는 말</small></div>
                )}
              </div>
              <div className="book-info">
                <span className="book-no">0{i + 1}</span>
                <h3>{book.title}</h3><p>{book.desc}</p>
                <a href={book.href} target="_blank" rel="noreferrer">구매하러 가기 <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="channels" id="links">
        <div className="shell channels-inner">
          <div className="channel-title"><p className="eyebrow">FOLLOW THE STORY</p><h2>샤인포레스트의<br />오늘을 만나세요</h2></div>
          <div className="link-list">
            {links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              <span className="channel-mark">{link.mark}</span><span><b>{link.label}</b><small>{link.sub}</small></span><Arrow />
            </a>)}
          </div>
        </div>
      </section>

      <footer className="shell">
        <div className="footer-brand"><img src="/shineforest-logo.jpg" alt="" /><span>샤인포레스트</span></div>
        <p>삶을 여행처럼 기록합니다.</p><small>© 2026 SHINE FOREST. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
