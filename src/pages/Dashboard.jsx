export default function Dashboard() {
  return (
    <div className="bg-background-light min-h-screen text-[#181511]">
      <div className="flex min-h-screen justify-center">
        <main className="flex-1 max-w-7xl p-8">
          <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Sneaker Inventory
              </h2>
              <p className="text-gray-500">
                Manage your product catalog and stock levels.
              </p>
            </div>
            <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">add</span>
              Create New Sneaker
            </button>
          </header>
          <div className="bg-white rounded-2xl border border-accent-pink shadow-sm overflow-hidden">
            <div className="p-6 border-b border-accent-pink flex flex-wrap items-center justify-between gap-4">
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-pink-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                  placeholder="Search inventory..."
                  type="text"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-pink-50">
                  <span className="material-symbols-outlined text-lg">
                    filter_list
                  </span>
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="bg-pink-50/50 text-gray-500 text-xs uppercase tracking-widest">
                    <th className="px-6 py-4 font-bold">Model Name</th>
                    <th className="px-6 py-4 font-bold">Brand</th>
                    <th className="px-6 py-4 font-bold">Price</th>
                    <th className="px-6 py-4 font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent-pink">
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                          alt="Air Jordan 1 Retro"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Air Jordan 1 Retro</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Jordan Brand</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $190.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                          alt="Air Jordan 1 Retro"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Air Jordan 1 Retro</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Jordan Brand</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $190.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                          alt="Air Jordan 1 Retro"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Air Jordan 1 Retro</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Jordan Brand</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $190.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                          alt="Air Jordan 1 Retro"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Air Jordan 1 Retro</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Jordan Brand</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $190.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTtHpURPjk1phSwDW_zEBFmB7PHrk-svjvOEeFalfVPRRHn1314H4v84rVMA22rMDnfsY1x5-IQHLNtzhsUt3uv__o5fnsJmg2k8LQnQ9PuBonZLWAKcaqluXnfgRve57OuhoglpVw1jyGXDNOOzYsT0Xe4ro3dmvb1Ojq1wYz313lyJa8QwG-4mrQ9moaXwU1WdCozyRtddk5NhZPs0QMmez98PXT-2vsYS_YkEp5GUXPHeRc8U4iGXzDaXCdKmGt8lcKYhouWj9"
                          alt="Air Jordan 1 Retro"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Air Jordan 1 Retro</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Jordan Brand</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $190.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdl2fwY58cwG3YLGoFEc1Rg9z-pdGRX24xYw1UBfKZo8dFz7oj9xtHWbHcNGoMw-GClN-XlBl5AwdSovvZb1j7NrvnIob6lXLhiUBbRbQrUuFCbiCahwGuRuzV_UKV4MBv-b1gtpJ2gLQoxt7m7or0_qYGt7PqUckzBVlWcqI2UdYed2X2C2HcgEpr0sPb6CF_gMNVAD7EKTjHFPLwo3keegCJdqrg42StE488SmaM8oCykHwI5COgZPnLvZLXRX8gHYlIq6_TuVXC"
                          alt="Nike Dunk Low"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Nike Dunk Low</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Nike Sportswear</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $115.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-GQjivXkCkRk_jDXE9qnVCkInBEXdAmkrkuK4bEdRlVkGxzkC8CBzPus-zwCGA9J9wFr0l3TxzjV4i1265ROaVDjx2OPvSA2TyGeODP2gCNIDWWpcpfTAjA8RDOS_IODBTUYTX8Twm5v2AemIesd2K-uF8KSiJ2j0CGX_nyCi3WXkssp3lvgQL9ZRFp5ykmT3ICjIkTD-ThTVaz8piynCw2xuGjyrM8pB9vIlRTdGHHc_tKgdafwH7rdKJyAVuPXa5bD7ZfdK4Rp"
                          alt="Yeezy Boost 350"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-bold">Yeezy Boost 350</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Adidas Originals
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      $230.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-pink-50/20 border-t border-accent-pink flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold">1</span> to{" "}
                <span className="font-bold">3</span> of{" "}
                <span className="font-bold">1,284</span> results
              </p>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">
                  1
                </button>
                <button className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white">
                  2
                </button>
                <button className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white">
                  3
                </button>
                <button className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
