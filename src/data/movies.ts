export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster?: string;
}

interface GenreTheme {
  from: string; 
  to: string;   
  tag: string;  
}


export const GENRE_THEME: Record<string, GenreTheme> = {
  "Sci-Fi":     { from: "#12335c", to: "#060f1f", tag: "#5b9bd9" },
  "Action":     { from: "#5c1414", to: "#1a0505", tag: "#e0616a" },
  "Animation":  { from: "#5c4a12", to: "#1f1806", tag: "#e0b84f" },
  "Drama":      { from: "#331258", to: "#0f051d", tag: "#b083e0" },
  "Comedy":     { from: "#0f5c46", to: "#04201a", tag: "#5fd9ae" },
  "Thriller":   { from: "#242424", to: "#080808", tag: "#c9c9c9" },
  "Biography":  { from: "#5c3a12", to: "#1f1305", tag: "#e0a05f" },
  "Horror":     { from: "#3a0808", to: "#120202", tag: "#e05f5f" },
  "Romance":    { from: "#5c1238", to: "#1f0513", tag: "#e05f97" },
};


export const movies: Movie[] = [
  {
      id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8,
      poster: "https://imgs.search.brave.com/AvqYdTtoT8M4VsiIjETSVdiCoZtjk-J7ckdr7PQE9gM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlsbWRpZW5zdC5k/ZS9iaWxkL2ZpbG1k/Yi8xMzYwNTQvaW5j/ZXB0aW9uLWhhdXB0/cGxha2F0LmpwZz90/PTE1MTUxNTc3MDI"
  },
  {
      id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6,
      poster: "https://imgs.search.brave.com/a90vYknkSqhJTejdg9U_pLy_VtO1PRyv_rHrKg5egdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFhLzg2/L2YxLzFhODZmMTQx/ZTBjMGE5N2IwOGVm/ODMwZmQyNDhmNTky/LmpwZw"
  },
  {
      id: 3, title: "Arrival", genre: "Sci-Fi", year: 2016, rating: 7.9,
      poster: "https://imgs.search.brave.com/6GXygPs_y6bdrPMqnI-GXlrcfhnMocRrzd16lRDbBcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU4/ZTkyNWI2ZjVlMjMx/YTE4YTQ3MzA4MC9l/ZTliOTBkOS1iMmJl/LTRkMzktOGNmNC0y/NzNlYjU0MjI5ZWQv/QXJyaXZhbC1iZXN0/LXBvc3Rlci5qcGc"
  },
  {
      id: 4, title: "Blade Runner 2049", genre: "Sci-Fi", year: 2017, rating: 8.0,
      poster: "https://imgs.search.brave.com/LF87demXYR92J2r1vjwM6SUE48cP0BEOg_Oybt4oGMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Js/YWRlcnVubmVyL2lt/YWdlcy9mL2YyL0Js/YWRlX1J1bm5lcl8y/MDQ5X1Bvc3Rlci5q/cGcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vMjY4P2NiPTIw/MTcxMDAzMDQ0MjAx"
  },
  {
      id: 5, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0,
      poster: "https://imgs.search.brave.com/_emh9mMx7T5ESxyZQ_RztWU22yH7sWJ607uSX9fPjms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZhL2Fh/LzY4LzZhYWE2ODQw/ZDQ5ODYxYzk3MmQ0/ODgyZGRhNTUyY2I0/LmpwZw"
  },
  {
      id: 6, title: "Mad Max: Fury Road", genre: "Action", year: 2015, rating: 8.1,
      poster: "https://imgs.search.brave.com/wTcmd3CFRHVcpIXif0aLrhSAYigmhx8t0D3pULwYBdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82ZS9NYWRfTWF4/X0Z1cnlfUm9hZC5q/cGcvMjUwcHgtTWFk/X01heF9GdXJ5X1Jv/YWQuanBnP3V0bV9z/b3VyY2U9ZW4ud2lr/aXBlZGlhLm9yZyZ1/dG1fY2FtcGFpZ249/cGFyc2VyJnV0bV9j/b250ZW50PXRodW1i/bmFpbA"
  },
  {
      id: 7, title: "John Wick", genre: "Action", year: 2014, rating: 7.4,
      poster: "https://imgs.search.brave.com/BPhEIQB21Dib7BKbkmsvdxlrdksURthbi8os8xWmvM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW9u/c2dhdGUuYnJpZ2h0/c3BvdGNkbi5jb20v/NTkvZTgvNTc2Yzkx/YWU0N2U0YWE3ZmQ2/MjQwZGM0ODY3NC9q/b2huLXdpY2stY2hh/cHRlci0xLW1vdmll/cy1wb3N0ZXItMDEu/anBn"
  },
  {
      id: 8, title: "Spirited Away", genre: "Animation", year: 2001, rating: 8.6,
      poster: "https://imgs.search.brave.com/bn81-F7CC9yV-wqQ3uQNpWPVn-E-7CW_bQDu1D0nIOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5URXlObUV3/T1dVdFl6a3lPQzAw/WlRRNExUbGxabVV0/TWprMFkyWXdPR1V6/WWpSaVhrRXlYa0Zx/Y0djQC5qcGc"
  },
  {
      id: 9, title: "Into the Spider-Verse", genre: "Animation", year: 2018, rating: 8.4,
      poster: "https://imgs.search.brave.com/szujKn_omOBmQ_ZgCK0QO32LcVlN0BvEs3Zm1kwxPQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzI3/L2UwLzNlMjdlMDVh/ZDRmZTAxMGZlNGMx/ZTNlNDI0OTNkNGEz/LmpwZw"
  },
  {
      id: 10, title: "Grave of the Fireflies", genre: "Animation", year: 1988, rating: 8.5,
      poster: "https://imgs.search.brave.com/0LOm03heGZxlCeTaQ8EXSy28liaDZKVLMtiamQYrNbc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwL2Uy/LzFlLzMwZTIxZTlm/OTZiMDllYTBmYjMz/MDMzMTRhNzRjMTA3/LmpwZw"
  },
  {
      id: 11, title: "Parasite", genre: "Drama", year: 2019, rating: 8.5,
      poster: "https://imgs.search.brave.com/RU8CJC2IdMw8bwPj9HfkdS-WYEE5OAkLnRYWaQGA_dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9zdGVyaXN0LmV1/L2Nkbi9zaG9wL2Zp/bGVzL3BhcmFzaXRl/LW1vdmllLXBvc3Rl/ci12MS0wMS5qcGc_/Y3JvcD1jZW50ZXIm/aGVpZ2h0PTcyMyZ2/PTE2OTg0MDE5MzAm/d2lkdGg9NzIz"
  },
  {
      id: 12, title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3,
      poster: "https://imgs.search.brave.com/SzVv0P3QZ_sP2mg1s4nNd7iNz97Zm0Dc_tAPm339uTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwL2Jk/Lzg2LzMwYmQ4NmI0/MTcwYTBiNjAyZTNm/Yjk5M2JjOWY3OTdi/LmpwZw"
  },
  {
      id: 13, title: "Forrest Gump", genre: "Drama", year: 1994, rating: 8.8,
      poster: "https://imgs.search.brave.com/5mLV2HRxWecnNrNDq4kwHQmegj6UE_OBNQbNeVqSUqE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3LzVh/L2NlL2E3NWFjZTll/NDU4Nzg2YWUxZGI0/YWY3YmYxNmQyM2Y1/LmpwZw"
    },
  {
      id: 14, title: "The Grand Budapest Hotel", genre: "Comedy", year: 2014, rating: 8.1,
      poster: "https://imgs.search.brave.com/snjVt81k7K2zBbhFNK0rzSyEGdzKxkrC8BCSKN5yUtg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzBm/L2FmLzg1MGZhZjA1/NTFhYzY3MTllOGZj/MWQ4OTMyMjgzYjEw/LmpwZw"
    },
  {
      id: 15, title: "Superbad", genre: "Comedy", year: 2007, rating: 7.6,
      poster: "https://imgs.search.brave.com/iWCd0SDe_7Fu-PE1b5b_YqQcXhIG2guLt974Rof21jo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41NTU2/MjYwMjkzLjAyOTkv/ZnBvc3RlcixzbWFs/bCx3YWxsX3RleHR1/cmUsc3F1YXJlX3By/b2R1Y3QsNjAweDYw/MC5qcGc"
  },
  {
      id: 16, title: "Knives Out", genre: "Comedy", year: 2019, rating: 7.9,
      poster: "https://imgs.search.brave.com/BZmAc9UmKwPDGj-OamTO2py0cgkDE5X0pEnFTsQ5_68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM3LzZi/LzFmLzM3NmIxZmMy/ZDE2YTdhMmRiZGQy/ZDVlNTg1MTk2ZDg3/LmpwZw"
  },
  {
      id: 17, title: "Darkest Hour", genre: "Biography", year: 2017, rating: 7.4,
      poster: "https://imgs.search.brave.com/5IivY5io6zYGudYX5t6ZQMbyudI6tNRzzX_5TLWpJQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzA0/Lzc1LzY1MDQ3NWY1/ZTZmMDdhMWJkZTQ5/N2EyNjA1NmRmYjFl/LmpwZw"
  },
  {
      id: 18, title: "The Social Network", genre: "Biography", year: 2010, rating: 7.7,
      poster: "https://imgs.search.brave.com/3CvEahskKBndPy5mzxYrlqNVlJdsNbHyshGxuUwR-2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk1L2E5/LzA2Lzk1YTkwNmY1/YjA2NDc4YWM3YjU3/OTNjMDMzNDhjNDc3/LmpwZw"
  },
  {
      id: 19, title: "Se7en", genre: "Thriller", year: 1995, rating: 8.6,
      poster: "https://imgs.search.brave.com/04IyROS9bqRH6h-4FlyTVpCtN4hZCQgHWX2PhBq86N8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViLzQy/LzI2LzViNDIyNjNh/NWI4Njk0ZWY4ODYw/N2FmYTY0N2JiNzhm/LmpwZw"
  },
  {
      id: 20, title: "Gone Girl", genre: "Thriller", year: 2014, rating: 8.1,
      poster: "https://imgs.search.brave.com/LIGKm86mIVuOv-Ec0q_3Gzk9ssi2_YJH6UFTz6QBHuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzliL2I3/L2U2LzliYjdlNjE4/NDNiMjE2YjE1YTg0/YTc5NzM1YjI3MTA1/LmpwZw"
  },
  {
      id: 21, title: "Prisoners", genre: "Thriller", year: 2013, rating: 8.1,
      poster: "https://imgs.search.brave.com/lk_fY2m_k8iUsoawxvJ5bRKITvPUN-GNv_0BTS9kjkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBlL2Jj/LzlkLzBlYmM5ZDll/NmQxZGNhZWJjN2M4/NTg1ZmI1NTM0YWZm/LmpwZw"
  },
  {
      id: 22, title: "Hereditary", genre: "Horror", year: 2018, rating: 7.3,
      poster: "https://imgs.search.brave.com/baJmJvXnfrwLQDEOkndQ_7HrWlR9znvc9NRH9yKHCzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I1LzZk/L2IwL2I1NmRiMDI5/M2EzNDJkOGM1NDU5/YjMyNGNlMTA2YTI4/LmpwZw"
  },
  {
      id: 23, title: "The Shining", genre: "Horror", year: 1980, rating: 8.4,
      poster: "https://imgs.search.brave.com/uO1phBtBLKb-pQbeqW-REgwUvFPhgLyTG32crQ1QRN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzNi/L2Q1LzY1M2JkNWE4/NmYwYjY0OGI3YTA3/YTM3OGJmYWQwY2M0/LmpwZw"
  },
  {
      id: 24, title: "La La Land", genre: "Romance", year: 2016, rating: 8.0,
      poster: "https://imgs.search.brave.com/qwLS12rbXvI1l-wzTwDGLFUQhs-hdCVbYQ2fZqZmjFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FhLzFl/LzdkL2FhMWU3ZDNk/YTAwNTNmYzY3Y2Qy/ZmJjNjA4MTc0N2Ux/LmpwZw"
  },
  {
      id: 25, title: "Pride & Prejudice", genre: "Romance", year: 2005, rating: 7.8,
      poster: "https://imgs.search.brave.com/VXa3iZwbIuvjQ0Qb4YBd8q7-G9havo4bM9k3pqj72BI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q1LzM3/Lzk3L2Q1Mzc5Nzg3/MzAzZjRmOGVjNDJk/M2E4YzQ1NTQ4MTQz/LmpwZw"
  },
];


export const GENRES = ["All", ...new Set(movies.map((m) => m.genre))];