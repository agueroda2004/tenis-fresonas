function App() {
  return (
    <div className="bg-background-light min-h-screen text-[#181511]">
      <div className="max-w-[500px] mx-auto bg-white min-h-screen shadow-2xl relative flex flex-col">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ffe4e6] px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">
                  nutrition
                </span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">T-Fresonas</h1>
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-3 bg-pink-50/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary placeholder-gray-500 outline-none"
              placeholder="Search your favorite kicks..."
              type="text"
            />
          </div>
        </header>
        <div className="px-4 py-4 overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <button className="flex items-center gap-1 bg-pink-50/50 px-3 py-2 rounded-xl text-sm font-semibold">
              <span className="material-symbols-outlined text-lg">
                filter_list
              </span>
              <span>Filter</span>
            </button>
            <div className="h-6 w-[1px] bg-pink-100"></div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              <button className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
                All
              </button>
              <button className="bg-pink-50/50 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
                Nike
              </button>
              <button className="bg-pink-50/50 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
                Jordan
              </button>
              <button className="bg-pink-50/50 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
                Adidas
              </button>
              <button className="bg-pink-50/50 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
                Yeezy
              </button>
            </div>
          </div>
        </div>
        <main className="px-4 flex-1 space-y-6 pb-12">
          <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-pink-50">
            <div className="relative aspect-square w-full bg-[#fdf2f2] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                alt="Close up shot of Air Jordan 1 Retro high top sneakers"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    Air Jordan 1 Retro
                  </h3>
                  <p className="text-gray-500 text-sm">Jordan Brand</p>
                </div>
                <p className="text-primary text-xl font-black">$190.00</p>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">visibility</span>
                View Details
              </button>
            </div>
          </div>
          <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-pink-50">
            <div className="relative aspect-square w-full bg-[#fdf2f2] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdl2fwY58cwG3YLGoFEc1Rg9z-pdGRX24xYw1UBfKZo8dFz7oj9xtHWbHcNGoMw-GClN-XlBl5AwdSovvZb1j7NrvnIob6lXLhiUBbRbQrUuFCbiCahwGuRuzV_UKV4MBv-b1gtpJ2gLQoxt7m7or0_qYGt7PqUckzBVlWcqI2UdYed2X2C2HcgEpr0sPb6CF_gMNVAD7EKTjHFPLwo3keegCJdqrg42StE488SmaM8oCykHwI5COgZPnLvZLXRX8gHYlIq6_TuVXC"
                alt="Nike Dunk Low panda black and white sneakers"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    Nike Dunk Low
                  </h3>
                  <p className="text-gray-500 text-sm">Nike Sportswear</p>
                </div>
                <p className="text-primary text-xl font-black">$115.00</p>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">visibility</span>
                View Details
              </button>
            </div>
          </div>
          <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-pink-50">
            <div className="relative aspect-square w-full bg-[#fdf2f2] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-GQjivXkCkRk_jDXE9qnVCkInBEXdAmkrkuK4bEdRlVkGxzkC8CBzPus-zwCGA9J9wFr0l3TxzjV4i1265ROaVDjx2OPvSA2TyGeODP2gCNIDWWpcpfTAjA8RDOS_IODBTUYTX8Twm5v2AemIesd2K-uF8KSiJ2j0CGX_nyCi3WXkssp3lvgQL9ZRFp5ykmT3ICjIkTD-ThTVaz8piynCw2xuGjyrM8pB9vIlRTdGHHc_tKgdafwH7rdKJyAVuPXa5bD7ZfdK4Rp"
                alt="Adidas Yeezy Boost 350 modern running sneakers"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    Yeezy Boost 350
                  </h3>
                  <p className="text-gray-500 text-sm">Adidas Originals</p>
                </div>
                <p className="text-primary text-xl font-black">$230.00</p>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">visibility</span>
                View Details
              </button>
            </div>
          </div>
          <div className="py-10 flex justify-center">
            <button className="text-primary font-bold border-2 border-primary/20 px-8 py-3 rounded-xl hover:bg-primary/10 transition-colors">
              View More Kicks
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
