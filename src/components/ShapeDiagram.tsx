import React from 'react';
import { ShapeDiagramData } from '../types/game';

interface Props {
  diagram?: ShapeDiagramData;
}

export const ShapeDiagram: React.FC<Props> = ({ diagram }) => {
  if (!diagram) return null;

  const { shape, label } = diagram;

  return (
    <div className="my-2.5 sm:my-3 bg-gradient-to-b from-blue-50/90 to-sky-50/80 border-2 border-blue-200/90 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center shadow-xs w-full">
      {label && (
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-200/80 px-2.5 py-0.5 rounded-full mb-1.5 shadow-2xs">
          {label}
        </span>
      )}

      <div className="w-full max-w-[330px] sm:max-w-[370px] min-h-[145px] sm:min-h-[155px] flex items-center justify-center overflow-hidden">
        {/* ======================= POS 1: KANTIN ======================= */}

        {/* Q1: 6 Buku Dongeng vs 8 Buku Sains */}
        {shape === 'rasio_buku_6_8' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            
            {/* Shelf A: 6 Buku Dongeng */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">📘 Buku Dongeng</text>
              <rect x="15" y="80" width="90" height="6" rx="2" fill="#93c5fd" />
              {/* Stack of books */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={i} x="25" y={72 - i * 8} width="70" height="7" rx="2" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
              ))}
              <rect x="25" y="90" width="70" height="18" rx="4" fill="#1d4ed8" />
              <text x="60" y="103" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Total: 6 Buku</text>
            </g>

            {/* Colon */}
            <text x="160" y="75" textAnchor="middle" fill="#2563eb" fontSize="28" fontWeight="900">:</text>

            {/* Shelf B: 8 Buku Sains */}
            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#fefce8" stroke="#eab308" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">📙 Buku Sains</text>
              <rect x="15" y="80" width="90" height="6" rx="2" fill="#fde047" />
              {/* Stack of books */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <rect key={i} x="25" y={73 - i * 6.5} width="70" height="6" rx="2" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
              ))}
              <rect x="25" y="90" width="70" height="18" rx="4" fill="#ca8a04" />
              <text x="60" y="103" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Total: 8 Buku</text>
            </g>
          </svg>
        )}

        {/* Q2: 12 Kelereng Merah vs 18 Kelereng Hijau */}
        {shape === 'rasio_kelereng_12_18' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            {/* Toples Merah */}
            <g transform="translate(25, 18)">
              <rect x="10" y="0" width="100" height="105" rx="12" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1.5" />
              <rect x="25" y="-5" width="70" height="8" rx="3" fill="#fda4af" stroke="#f43f5e" strokeWidth="1" />
              <text x="60" y="22" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">Toples Merah</text>
              <text x="60" y="60" textAnchor="middle" fill="#be123c" fontSize="24">🔴</text>
              <rect x="18" y="78" width="84" height="20" rx="4" fill="#f43f5e" />
              <text x="60" y="92" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">12 Kelereng</text>
            </g>

            <text x="160" y="75" textAnchor="middle" fill="#059669" fontSize="28" fontWeight="900">:</text>

            {/* Toples Hijau */}
            <g transform="translate(175, 18)">
              <rect x="10" y="0" width="100" height="105" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <rect x="25" y="-5" width="70" height="8" rx="3" fill="#86efac" stroke="#22c55e" strokeWidth="1" />
              <text x="60" y="22" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Toples Hijau</text>
              <text x="60" y="60" textAnchor="middle" fill="#15803d" fontSize="24">🟢</text>
              <rect x="18" y="78" width="84" height="20" rx="4" fill="#16a34a" />
              <text x="60" y="92" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">18 Kelereng</text>
            </g>
          </svg>
        )}

        {/* Q3: 5 Bola Basket & 15 Bola Voli (Total 20 Bola) */}
        {shape === 'rasio_bola_basket_total' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="70" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              
              {/* Basket Card */}
              <g transform="translate(15, 12)">
                <rect x="0" y="0" width="110" height="46" rx="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                <text x="15" y="28" fontSize="18">🏀</text>
                <text x="42" y="22" fill="#c2410c" fontSize="11" fontWeight="bold">5 Bola</text>
                <text x="42" y="36" fill="#9a3412" fontSize="9">Basket</text>
              </g>

              {/* Voli Card */}
              <g transform="translate(145, 12)">
                <rect x="0" y="0" width="110" height="46" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                <text x="15" y="28" fontSize="18">🏐</text>
                <text x="42" y="22" fill="#0369a1" fontSize="11" fontWeight="bold">15 Bola</text>
                <text x="42" y="36" fill="#075985" fontSize="9">Voli</text>
              </g>
            </g>

            {/* Total Badge */}
            <g transform="translate(50, 100)">
              <rect x="0" y="0" width="220" height="28" rx="8" fill="#ea580c" />
              <text x="110" y="18" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                Total Seluruh Bola = 20 Bola
              </text>
            </g>
          </svg>
        )}

        {/* Q4: Apel Merah : Apel Hijau = 3 : 5 (Hijau = 15 buah, Merah = ?) */}
        {shape === 'rasio_apel_merah_hijau' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" />
            
            {/* Basket of apples */}
            <g transform="translate(25, 18)">
              {/* Apel Merah Card */}
              <rect x="0" y="0" width="125" height="100" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
              <text x="62" y="22" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">🍎 Apel Merah</text>
              <text x="62" y="52" textAnchor="middle" fill="#dc2626" fontSize="24">🍎</text>
              <rect x="15" y="70" width="95" height="22" rx="6" fill="#ef4444" />
              <text x="62" y="85" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">? buah</text>
            </g>

            {/* Apel Hijau Card */}
            <g transform="translate(170, 18)">
              <rect x="0" y="0" width="125" height="100" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <text x="62" y="22" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">🍏 Apel Hijau</text>
              <text x="62" y="52" textAnchor="middle" fill="#16a34a" fontSize="24">🍏</text>
              <rect x="15" y="70" width="95" height="22" rx="6" fill="#16a34a" />
              <text x="62" y="85" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">15 buah</text>
            </g>

            {/* Ratio Banner at bottom */}
            <rect x="60" y="124" width="200" height="18" rx="4" fill="#fee2e2" />
            <text x="160" y="137" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">
              Rasio Merah : Hijau = 3 : 5
            </text>
          </svg>
        )}

        {/* Q5: Pensil : Pulpen = 4 : 7 (Pulpen = 28 buah, Pensil = ?) */}
        {shape === 'rasio_pensil_pulpen' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#c4b5fd" strokeWidth="1.5" />
            
            <g transform="translate(25, 18)">
              {/* Pensil Card */}
              <rect x="0" y="0" width="125" height="98" rx="10" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="62" y="22" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">✏️ Wadah Pensil</text>
              <text x="62" y="52" textAnchor="middle" fill="#7c3aed" fontSize="24">✏️</text>
              <rect x="15" y="68" width="95" height="22" rx="6" fill="#7c3aed" />
              <text x="62" y="83" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">? buah</text>
            </g>

            <g transform="translate(170, 18)">
              {/* Pulpen Card */}
              <rect x="0" y="0" width="125" height="98" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="62" y="22" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">🖊️ Wadah Pulpen</text>
              <text x="62" y="52" textAnchor="middle" fill="#2563eb" fontSize="24">🖊️</text>
              <rect x="15" y="68" width="95" height="22" rx="6" fill="#2563eb" />
              <text x="62" y="83" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">28 buah</text>
            </g>

            <rect x="60" y="124" width="200" height="18" rx="4" fill="#ede9fe" />
            <text x="160" y="137" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">
              Rasio Pensil : Pulpen = 4 : 7
            </text>
          </svg>
        )}

        {/* ======================= POS 2: UKS ======================= */}

        {/* Q6: Paket 4 Buku = Rp20.000 -> 1 Buku = ? */}
        {shape === 'rasio_satuan_buku' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#6ee7b7" strokeWidth="1.5" />
            
            {/* 1 Paket (4 Buku) */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">1 Paket (4 Buku)</text>
              <text x="60" y="55" textAnchor="middle" fontSize="26">📚</text>
              <rect x="12" y="72" width="96" height="20" rx="4" fill="#10b981" />
              <text x="60" y="86" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Rp20.000</text>
            </g>

            <text x="160" y="70" textAnchor="middle" fill="#059669" fontSize="24">➔</text>

            {/* 1 Buku (Ditanyakan) */}
            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#f0fdf4" stroke="#059669" strokeWidth="2" />
              <text x="60" y="22" textAnchor="middle" fill="#064e3b" fontSize="10" fontWeight="bold">1 Buku Satuan</text>
              <text x="60" y="55" textAnchor="middle" fontSize="26">📖</text>
              <rect x="12" y="72" width="96" height="20" rx="4" fill="#047857" />
              <text x="60" y="86" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">Rp ?</text>
            </g>
          </svg>
        )}

        {/* Q7: Kecepatan: 180 km dalam 3 jam -> ? km/jam */}
        {shape === 'rasio_kecepatan_bus' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="60" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
              <text x="20" y="35" fontSize="24">🚐</text>
              <text x="60" y="28" fill="#0369a1" fontSize="11" fontWeight="bold">Mobil Layanan Kesehatan</text>
              <text x="60" y="44" fill="#0284c7" fontSize="10">SDN 3 Loloan Timur</text>
            </g>

            {/* Track Info */}
            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="115" height="34" rx="6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
              <text x="57" y="14" textAnchor="middle" fill="#0369a1" fontSize="9">Jarak Tempuh:</text>
              <text x="57" y="27" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="bold">180 km</text>

              <rect x="135" y="0" width="115" height="34" rx="6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
              <text x="192" y="14" textAnchor="middle" fill="#0369a1" fontSize="9">Waktu Tempuh:</text>
              <text x="192" y="27" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="bold">3 Jam</text>
            </g>
          </svg>
        )}

        {/* Q8: 2 Liter -> 90 km. 5 Liter -> ? km */}
        {shape === 'rasio_bensin_jarak' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">Kondisi Awal</text>
              <text x="60" y="52" textAnchor="middle" fontSize="24">⛽</text>
              <rect x="12" y="70" width="96" height="20" rx="4" fill="#ea580c" />
              <text x="60" y="84" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">2 Liter = 90 km</text>
            </g>

            <text x="160" y="72" textAnchor="middle" fill="#ea580c" fontSize="24">➔</text>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#fef2f2" stroke="#ea580c" strokeWidth="2" />
              <text x="60" y="22" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">Isi Tangki Baru</text>
              <text x="60" y="52" textAnchor="middle" fontSize="24">🛵</text>
              <rect x="12" y="70" width="96" height="20" rx="4" fill="#c2410c" />
              <text x="60" y="84" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">5 Liter = ? km</text>
            </g>
          </svg>
        )}

        {/* Q9: Toko A (3 buah = Rp12.000) vs Toko B (5 buah = Rp17.500) */}
        {shape === 'rasio_toko_penghapus' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Toko A */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="60" y="24" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">🏪 Toko A</text>
              <text x="60" y="55" textAnchor="middle" fontSize="20">🏷️</text>
              <rect x="10" y="70" width="100" height="22" rx="4" fill="#64748b" />
              <text x="60" y="85" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">3 buah = Rp12.000</text>
            </g>

            <text x="160" y="72" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="900">VS</text>

            {/* Toko B */}
            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="100" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <text x="60" y="24" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">🏪 Toko B</text>
              <text x="60" y="55" textAnchor="middle" fontSize="20">🏷️</text>
              <rect x="10" y="70" width="100" height="22" rx="4" fill="#16a34a" />
              <text x="60" y="85" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">5 buah = Rp17.500</text>
            </g>
          </svg>
        )}

        {/* Q10: 4 Keliling = 12 Menit -> 7 Keliling = ? */}
        {shape === 'rasio_lari_lapangan' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fbcfe8" strokeWidth="1.5" />
            
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="260" height="48" rx="24" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <text x="40" y="32" fontSize="24">🏃</text>
              <text x="140" y="30" textAnchor="middle" fill="#db2777" fontSize="12" fontWeight="bold">
                Lintasan Lari Kebugaran
              </text>
            </g>

            <g transform="translate(35, 82)">
              <rect x="0" y="0" width="115" height="38" rx="8" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" />
              <text x="57" y="16" textAnchor="middle" fill="#be185d" fontSize="9">Catatan Lari:</text>
              <text x="57" y="30" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">4 Keliling = 12 Menit</text>

              <rect x="135" y="0" width="115" height="38" rx="8" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" />
              <text x="192" y="16" textAnchor="middle" fill="#be185d" fontSize="9">Target Uji Coba:</text>
              <text x="192" y="30" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">7 Keliling = ? Menit</text>
            </g>
          </svg>
        )}

        {/* ======================= POS 3: DAPUR ======================= */}

        {/* Q11: Pita Ani (10 cm) & Pita Budi -> Rasio 2 : 3 */}
        {shape === 'rasio_pita_ani_budi' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="44" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
              <text x="15" y="27" fontSize="18">🎀</text>
              <text x="45" y="27" fill="#b91c1c" fontSize="11" fontWeight="bold">Pita Ani</text>
              <rect x="170" y="10" width="85" height="24" rx="4" fill="#ef4444" />
              <text x="212" y="26" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">10 cm</text>
            </g>

            <g transform="translate(25, 72)">
              <rect x="0" y="0" width="270" height="44" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="15" y="27" fontSize="18">🎗️</text>
              <text x="45" y="27" fill="#1e40af" fontSize="11" fontWeight="bold">Pita Budi</text>
              <rect x="170" y="10" width="85" height="24" rx="4" fill="#2563eb" />
              <text x="212" y="26" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">? cm</text>
            </g>

            <rect x="70" y="124" width="180" height="18" rx="4" fill="#dbeafe" />
            <text x="160" y="137" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="bold">
              Rasio Panjang Ani : Budi = 2 : 3
            </text>
          </svg>
        )}

        {/* Q12: Sirup : Air = 1 : 4 (Sirup 6 Cangkir -> Air = ?) */}
        {shape === 'rasio_sirup_air' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
              <text x="60" y="24" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">Takaran Standar</text>
              <text x="60" y="55" textAnchor="middle" fontSize="24">🍷</text>
              <rect x="10" y="70" width="100" height="20" rx="4" fill="#ea580c" />
              <text x="60" y="84" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">1 Sirup : 4 Air</text>
            </g>

            <text x="160" y="72" textAnchor="middle" fill="#ea580c" fontSize="24">➔</text>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
              <text x="60" y="24" textAnchor="middle" fill="#075985" fontSize="10" fontWeight="bold">Takaran Sekarang</text>
              <text x="60" y="46" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">6 Cangkir Sirup</text>
              <rect x="10" y="68" width="100" height="22" rx="4" fill="#0284c7" />
              <text x="60" y="83" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">Air = ? Cangkir</text>
            </g>
          </svg>
        )}

        {/* Q13: Cat Kuning (3) + Biru (2) -> 12 Kuning : ? Biru */}
        {shape === 'rasio_cat_kuning_biru' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            <g transform="translate(25, 18)">
              <rect x="0" y="0" width="270" height="38" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <text x="135" y="24" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">
                🎨 Resep: 3 Kuning + 2 Biru = Hijau
              </text>
            </g>

            <g transform="translate(30, 68)">
              <rect x="0" y="0" width="115" height="52" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5" />
              <text x="57" y="20" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">Cat Kuning</text>
              <rect x="15" y="28" width="85" height="18" rx="4" fill="#eab308" />
              <text x="57" y="41" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">12 Kaleng</text>

              <text x="130" y="32" textAnchor="middle" fill="#15803d" fontSize="16" fontWeight="bold">➔</text>

              <rect x="145" y="0" width="115" height="52" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="202" y="20" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Cat Biru</text>
              <rect x="160" y="28" width="85" height="18" rx="4" fill="#2563eb" />
              <text x="202" y="41" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">? Kaleng</text>
            </g>
          </svg>
        )}

        {/* Q14: Tabel Rasio Bibit Mangga (3) vs Jambu (7) -> Nilai X = ? */}
        {shape === 'tabel_rasio_bibit' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            <g transform="translate(25, 25)">
              <rect x="0" y="0" width="90" height="28" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="45" y="18" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Jenis</text>
              <rect x="90" y="0" width="60" height="28" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="120" y="18" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Kolom 1</text>
              <rect x="150" y="0" width="60" height="28" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="180" y="18" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Kolom 2</text>
              <rect x="210" y="0" width="60" height="28" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="240" y="18" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Kolom 3</text>

              <rect x="0" y="28" width="90" height="28" fill="#fef3c7" stroke="#94a3b8" />
              <text x="45" y="46" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">🥭 Mangga</text>
              <rect x="90" y="28" width="60" height="28" fill="#ffffff" stroke="#94a3b8" />
              <text x="120" y="46" textAnchor="middle" fill="#334155" fontSize="11">3</text>
              <rect x="150" y="28" width="60" height="28" fill="#ffffff" stroke="#94a3b8" />
              <text x="180" y="46" textAnchor="middle" fill="#334155" fontSize="11">6</text>
              <rect x="210" y="28" width="60" height="28" fill="#fef3c7" stroke="#94a3b8" />
              <text x="240" y="46" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">12</text>

              <rect x="0" y="56" width="90" height="30" fill="#fce7f3" stroke="#94a3b8" />
              <text x="45" y="75" textAnchor="middle" fill="#9d174d" fontSize="10" fontWeight="bold">🍈 Jambu</text>
              <rect x="90" y="56" width="60" height="30" fill="#ffffff" stroke="#94a3b8" />
              <text x="120" y="75" textAnchor="middle" fill="#334155" fontSize="11">7</text>
              <rect x="150" y="56" width="60" height="30" fill="#ffffff" stroke="#94a3b8" />
              <text x="180" y="75" textAnchor="middle" fill="#334155" fontSize="11">14</text>
              <rect x="210" y="56" width="60" height="30" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
              <text x="240" y="76" textAnchor="middle" fill="#9d174d" fontSize="13" fontWeight="900">X = ?</text>
            </g>
          </svg>
        )}

        {/* Q15: 5 Porsi = 250 g -> 8 Porsi = ? gram */}
        {shape === 'rasio_tepung_bolu' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              <text x="60" y="24" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">5 Porsi Bolu</text>
              <text x="60" y="52" textAnchor="middle" fontSize="24">🧁</text>
              <rect x="10" y="70" width="100" height="20" rx="4" fill="#ea580c" />
              <text x="60" y="84" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">250 gram tepung</text>
            </g>

            <text x="160" y="72" textAnchor="middle" fill="#ea580c" fontSize="24">➔</text>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="98" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="60" y="24" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">8 Porsi Bolu</text>
              <text x="60" y="52" textAnchor="middle" fontSize="24">🎂</text>
              <rect x="10" y="70" width="100" height="20" rx="4" fill="#ca8a04" />
              <text x="60" y="84" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">? gram tepung</text>
            </g>
          </svg>
        )}

        {/* ======================= POS 4: TOILET ======================= */}

        {/* Q16: Umur Kakak & Adik (Rasio 5 : 3, Jumlah 24 tahun) */}
        {shape === 'rasio_umur_kakak_adik' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#c4b5fd" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="60" y="26" textAnchor="middle" fontSize="24">👦</text>
              <text x="60" y="52" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">Kakak</text>
              <text x="60" y="68" textAnchor="middle" fill="#5b21b6" fontSize="10">Umur = ? Tahun</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              <text x="60" y="26" textAnchor="middle" fontSize="24">🧒</text>
              <text x="60" y="52" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Adik</text>
              <text x="60" y="68" textAnchor="middle" fill="#075985" fontSize="10">Umur Adik</text>
            </g>

            <rect x="40" y="112" width="240" height="24" rx="6" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">
              Rasio Umur 5 : 3 &bull; Jumlah Umur = 24 Tahun
            </text>
          </svg>
        )}

        {/* Q17: Uang Rian & Dika (Rasio 7 : 4, Selisih Rp15.000) */}
        {shape === 'rasio_uang_rian_dika' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
              <text x="60" y="26" textAnchor="middle" fontSize="24">👛</text>
              <text x="60" y="52" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">Dompet Rian</text>
              <text x="60" y="68" textAnchor="middle" fill="#166534" fontSize="10">Uang = Rp ?</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="60" y="26" textAnchor="middle" fontSize="24">👛</text>
              <text x="60" y="52" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Dompet Dika</text>
              <text x="60" y="68" textAnchor="middle" fill="#075985" fontSize="10">Uang Dika</text>
            </g>

            <rect x="40" y="112" width="240" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">
              Rasio Uang 7 : 4 &bull; Selisih Uang = Rp15.000
            </text>
          </svg>
        )}

        {/* Q18: Siswa Kelas 6 (Laki-laki : Perempuan = 3 : 5, Total = 40) */}
        {shape === 'rasio_gender_kelas_6' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="60" y="32" textAnchor="middle" fontSize="24">👦</text>
              <text x="60" y="60" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">Siswa Laki-laki</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1.5" />
              <text x="60" y="32" textAnchor="middle" fontSize="24">👧</text>
              <text x="60" y="60" textAnchor="middle" fill="#be185d" fontSize="11" fontWeight="bold">Siswa Perempuan (?)</text>
            </g>

            <rect x="40" y="112" width="240" height="24" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="bold">
              Rasio 3 : 5 &bull; Total Seluruh Siswa = 40 Anak
            </text>
          </svg>
        )}

        {/* Q19: Tabungan Siti & Dewi (Rasio 3 : 4, Total Rp350.000) */}
        {shape === 'rasio_tabungan_siti_dewi' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fcd34d" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="60" y="30" textAnchor="middle" fontSize="24">🐖</text>
              <text x="60" y="60" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">Celengan Siti</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
              <text x="60" y="30" textAnchor="middle" fontSize="24">🐖</text>
              <text x="60" y="60" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">Celengan Dewi</text>
            </g>

            <rect x="40" y="112" width="240" height="24" rx="6" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">
              Rasio Tabungan 3 : 4 &bull; Total = Rp350.000
            </text>
          </svg>
        )}

        {/* Q20: Kelereng Farhan & Gilang (Rasio 5 : 8, Selisih 18 butir) */}
        {shape === 'rasio_kelereng_farhan_gilang' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
              <text x="60" y="28" textAnchor="middle" fontSize="22">🎒</text>
              <text x="60" y="55" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Saku Farhan</text>
              <text x="60" y="70" textAnchor="middle" fill="#64748b" fontSize="9">Kelereng Farhan</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="80" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              <text x="60" y="28" textAnchor="middle" fontSize="22">🎒</text>
              <text x="60" y="55" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">Saku Gilang</text>
              <text x="60" y="70" textAnchor="middle" fill="#0284c7" fontSize="9">Gilang = ? Butir</text>
            </g>

            <rect x="40" y="112" width="240" height="24" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">
              Rasio Kelereng 5 : 8 &bull; Selisih = 18 Butir
            </text>
          </svg>
        )}

        {/* ======================= POS 5: WALI KELAS 6 ======================= */}

        {/* Q21: Skala Peta: 1 : 50.000, Jarak peta = 6 cm */}
        {shape === 'rasio_skala_peta' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="68" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 2" />
              
              <circle cx="28" cy="34" r="14" fill="#ffffff" stroke="#b45309" strokeWidth="1.5" />
              <text x="28" y="38" textAnchor="middle" fontSize="14">🧭</text>

              <text x="55" y="30" fill="#78350f" fontSize="10" fontWeight="bold">Meja Wali Kelas 6</text>
              <line x1="55" y1="44" x2="210" y2="44" stroke="#b45309" strokeWidth="2" strokeDasharray="5 3" />
              <text x="132" y="40" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Jarak Peta: 6 cm</text>
              <text x="220" y="44" fontSize="18">🏝️</text>
            </g>

            <rect x="40" y="104" width="240" height="26" rx="6" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
            <text x="160" y="121" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">
              Skala Peta 1 : 50.000 &bull; Jarak Sebenarnya = ? km
            </text>
          </svg>
        )}

        {/* Q22: Koin Emas (2) : Perak (3) : Perunggu (5), Total = 150 keping */}
        {shape === 'rasio_koin_harta_karun' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#fcd34d" strokeWidth="2" />
            
            <g transform="translate(25, 18)">
              {/* Chest Icon */}
              <rect x="0" y="0" width="270" height="50" rx="8" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="20" y="32" fontSize="22">👑</text>
              <text x="50" y="24" fill="#713f12" fontSize="11" fontWeight="bold">Peti Harta Karun</text>
              <text x="50" y="40" fill="#854d0e" fontSize="9">Total Seluruh Koin = 150 Keping</text>
            </g>

            <g transform="translate(30, 80)">
              <rect x="0" y="0" width="80" height="42" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
              <text x="40" y="18" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">🥇 Emas</text>
              <text x="40" y="32" textAnchor="middle" fill="#713f12" fontSize="9">Rasio: 2</text>

              <rect x="90" y="0" width="80" height="42" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
              <text x="130" y="18" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">🥈 Perak</text>
              <text x="130" y="32" textAnchor="middle" fill="#475569" fontSize="9">Rasio: 3</text>

              <rect x="180" y="0" width="80" height="42" rx="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
              <text x="220" y="18" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">🥉 Perunggu</text>
              <text x="220" y="32" textAnchor="middle" fill="#c2410c" fontSize="9" fontWeight="900">? Keping</text>
            </g>
          </svg>
        )}

        {/* Q23: Tiga Petualang: Ali : Budi = 2 : 3, Budi : Candra = 4 : 5 */}
        {shape === 'rasio_tiga_petualang' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#a78bfa" strokeWidth="2" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="125" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.5" />
              <text x="62" y="22" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">Kelompok 1</text>
              <text x="62" y="40" textAnchor="middle" fill="#581c87" fontSize="11" fontWeight="bold">Ali : Budi = 2 : 3</text>

              <rect x="145" y="0" width="125" height="50" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
              <text x="207" y="22" textAnchor="middle" fill="#3730a3" fontSize="10" fontWeight="bold">Kelompok 2</text>
              <text x="207" y="40" textAnchor="middle" fill="#312e81" fontSize="11" fontWeight="bold">Budi : Candra = 4 : 5</text>
            </g>

            <rect x="40" y="90" width="240" height="34" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
            <text x="160" y="105" textAnchor="middle" fill="#5b21b6" fontSize="9">Perbandingan Gabungan Ketiganya:</text>
            <text x="160" y="119" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="900">
              Ali : Budi : Candra = ? : ? : ?
            </text>
          </svg>
        )}

        {/* Q24: Wadah Permata Awal 5 : 3, +6 Merah -> 2 : 1 */}
        {shape === 'rasio_transisi_permata' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="85" rx="8" fill="#fff1f2" stroke="#fb7185" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">Kondisi Awal</text>
              <text x="60" y="45" textAnchor="middle" fontSize="18">💎</text>
              <text x="60" y="68" textAnchor="middle" fill="#881337" fontSize="10" fontWeight="bold">Merah : Biru = 5 : 3</text>
            </g>

            <g transform="translate(150, 52)">
              <text x="10" y="0" textAnchor="middle" fill="#e11d48" fontSize="10" fontWeight="bold">+6 🔴</text>
              <text x="10" y="14" textAnchor="middle" fill="#e11d48" fontSize="14">➔</text>
            </g>

            <g transform="translate(175, 20)">
              <rect x="0" y="0" width="120" height="85" rx="8" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5" />
              <text x="60" y="22" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Kondisi Baru</text>
              <text x="60" y="45" textAnchor="middle" fontSize="18">💎</text>
              <text x="60" y="68" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="bold">Merah : Biru = 2 : 1</text>
            </g>

            <rect x="40" y="116" width="240" height="20" rx="4" fill="#ffe4e6" />
            <text x="160" y="130" textAnchor="middle" fill="#881337" fontSize="9" fontWeight="bold">
              Hitung Total Permata Mula-mula = ? Butir
            </text>
          </svg>
        )}

        {/* Q25: Denah Lapangan Skala 1 : 200 (8 cm × 5 cm) */}
        {shape === 'rasio_lapangan_skala' && (
          <svg viewBox="0 0 320 155" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="139" rx="14" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
            
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="85" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              
              <rect x="25" y="14" width="105" height="56" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="77" y="10" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">p = 8 cm</text>
              <text x="15" y="46" textAnchor="end" fill="#7dd3fc" fontSize="9" fontWeight="bold">l = 5 cm</text>
              <text x="77" y="46" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Denah (1:200)</text>

              <g transform="translate(145, 24)">
                <text x="0" y="14" fill="#38bdf8" fontSize="10" fontWeight="bold">Skala = 1 : 200</text>
                <text x="0" y="32" fill="#e0f2fe" fontSize="10">Panjang = 8 cm</text>
                <text x="0" y="48" fill="#e0f2fe" fontSize="10">Lebar = 5 cm</text>
              </g>
            </g>

            <rect x="40" y="116" width="240" height="20" rx="4" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
            <text x="160" y="130" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">
              Hitung Luas Sebenarnya (m²) = ?
            </text>
          </svg>
        )}

        {/* Fallback */}
        {!shape?.startsWith('rasio_') && !['tabel_rasio_bibit'].includes(shape) && (
          <svg viewBox="0 0 300 145" className="w-full h-full select-none">
            <rect x="10" y="10" width="280" height="125" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="150" y="45" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">
              📊 Konsep Rasio Matematika
            </text>
            <rect x="35" y="65" width="100" height="35" rx="6" fill="#bfdbfe" />
            <text x="85" y="87" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Kuantitas A</text>
            <text x="150" y="88" textAnchor="middle" fill="#2563eb" fontSize="20" fontWeight="900">:</text>
            <rect x="165" y="65" width="100" height="35" rx="6" fill="#fef08a" />
            <text x="215" y="87" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">Kuantitas B</text>
          </svg>
        )}
      </div>
    </div>
  );
};
