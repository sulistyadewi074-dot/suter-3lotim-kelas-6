import React from 'react';
import { ShapeDiagramData } from '../types/game';

interface Props {
  diagram?: ShapeDiagramData;
}

export const ShapeDiagram: React.FC<Props> = ({ diagram }) => {
  if (!diagram) return null;

  const { shape, dimensions = {}, label, notes } = diagram;

  return (
    <div className="my-2.5 sm:my-3 bg-gradient-to-b from-blue-50/90 to-sky-50/80 border-2 border-blue-200/90 rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center shadow-xs w-full">
      {label && (
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-200/80 px-2.5 py-0.5 rounded-full mb-1.5 shadow-2xs">
          {label}
        </span>
      )}

      <div className="w-full max-w-[330px] sm:max-w-[370px] min-h-[145px] sm:min-h-[160px] flex items-center justify-center overflow-hidden">
        {/* ======================= POS A ======================= */}

        {/* Q1: 6 Buku Cerita Biru vs 8 Buku Sains Kuning (Rasio 6:8 -> 3:4) */}
        {shape === 'rasio_buku_6_8' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            {/* Background card */}
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            
            {/* Group 1: Buku Cerita */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="130" height="90" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="65" y="18" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">📘 6 Buku Cerita</text>
              {/* 6 mini books */}
              {[0, 1, 2].map((col) => (
                <React.Fragment key={col}>
                  <rect x={18 + col * 36} y={26} width="24" height="26" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1={22 + col * 36} y1={30} x2={38 + col * 36} y2={30} stroke="#93c5fd" strokeWidth="1.5" />
                  <rect x={18 + col * 36} y={56} width="24" height="26" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1={22 + col * 36} y1={60} x2={38 + col * 36} y2={60} stroke="#93c5fd" strokeWidth="1.5" />
                </React.Fragment>
              ))}
              <text x="65" y="104" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="bold">3 Kelompok (×2)</text>
            </g>

            {/* Colon */}
            <text x="160" y="70" textAnchor="middle" fill="#2563eb" fontSize="24" fontWeight="900">:</text>

            {/* Group 2: Buku Sains */}
            <g transform="translate(170, 20)">
              <rect x="0" y="0" width="130" height="90" rx="10" fill="#fefce8" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="65" y="18" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">📙 8 Buku Sains</text>
              {/* 8 mini books */}
              {[0, 1, 2, 3].map((col) => (
                <React.Fragment key={col}>
                  <rect x={10 + col * 28} y={26} width="20" height="26" rx="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                  <line x1={13 + col * 28} y1={30} x2={27 + col * 28} y2={30} stroke="#fef08a" strokeWidth="1.5" />
                  <rect x={10 + col * 28} y={56} width="20" height="26" rx="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                  <line x1={13 + col * 28} y1={60} x2={27 + col * 28} y2={60} stroke="#fef08a" strokeWidth="1.5" />
                </React.Fragment>
              ))}
              <text x="65" y="104" textAnchor="middle" fill="#713f12" fontSize="10" fontWeight="bold">4 Kelompok (×2)</text>
            </g>

            {/* Bottom summary ribbon */}
            <rect x="70" y="124" width="180" height="22" rx="6" fill="#dbeafe" />
            <text x="160" y="139" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="800">
              Rasio Sederhana = 3 : 4
            </text>
          </svg>
        )}

        {/* Q2: 12 Kelereng Merah vs 18 Kelereng Hijau (FPB 6 -> 2 : 3) */}
        {shape === 'rasio_kelereng_12_18' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            {/* Merah: 12 kelereng */}
            <g transform="translate(25, 18)">
              <rect x="0" y="0" width="125" height="96" rx="10" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#9f1239" fontSize="11" fontWeight="bold">🔴 12 Kelereng Merah</text>
              {/* 3 rows of 4 kelereng */}
              {[0, 1, 2, 3].map((c) => (
                <React.Fragment key={c}>
                  <circle cx={25 + c * 25} cy={36} r="8" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
                  <circle cx={25 + c * 25} cy={58} r="8" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
                  <circle cx={25 + c * 25} cy={80} r="8" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
                </React.Fragment>
              ))}
              <text x="62" y="112" textAnchor="middle" fill="#be123c" fontSize="10" fontWeight="bold">2 Bagian (tiap bagian 6)</text>
            </g>

            <text x="160" y="70" textAnchor="middle" fill="#047857" fontSize="24" fontWeight="900">:</text>

            {/* Hijau: 18 kelereng */}
            <g transform="translate(170, 18)">
              <rect x="0" y="0" width="125" height="96" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">🟢 18 Kelereng Hijau</text>
              {/* 3 rows of 6 kelereng */}
              {[0, 1, 2, 3, 4, 5].map((c) => (
                <React.Fragment key={c}>
                  <circle cx={15 + c * 19} cy={36} r="7" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                  <circle cx={15 + c * 19} cy={58} r="7" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                  <circle cx={15 + c * 19} cy={80} r="7" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                </React.Fragment>
              ))}
              <text x="62" y="112" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">3 Bagian (tiap bagian 6)</text>
            </g>

            <rect x="65" y="132" width="190" height="18" rx="5" fill="#dcfce7" />
            <text x="160" y="145" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">
              Bagi FPB 6 ➔ Rasio = 2 : 3
            </text>
          </svg>
        )}

        {/* Q3: Bola Basket (5) & Voli (15) -> Basket terhadap TOTAL (5 : 20 = 1 : 4) */}
        {shape === 'rasio_bola_basket_total' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            {/* Visual Tape Diagram */}
            <text x="160" y="24" textAnchor="middle" fill="#c2410c" fontSize="11" fontWeight="bold">
              Model Batang (Tape Diagram) Total 20 Bola
            </text>

            {/* 4 blocks representing 5 balls each */}
            <g transform="translate(30, 36)">
              {/* Block 1: Basket (Orange) */}
              <rect x="0" y="0" width="65" height="42" rx="6" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
              <text x="32" y="20" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">🏀 5</text>
              <text x="32" y="34" textAnchor="middle" fill="#ffedd5" fontSize="9" fontWeight="bold">Basket</text>

              {/* Block 2,3,4: Voli (Blue) */}
              <rect x="65" y="0" width="65" height="42" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              <text x="97" y="20" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">🏐 5</text>
              <text x="97" y="34" textAnchor="middle" fill="#f0f9ff" fontSize="9" fontWeight="bold">Voli</text>

              <rect x="130" y="0" width="65" height="42" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              <text x="162" y="20" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">🏐 5</text>
              <text x="162" y="34" textAnchor="middle" fill="#f0f9ff" fontSize="9" fontWeight="bold">Voli</text>

              <rect x="195" y="0" width="65" height="42" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              <text x="227" y="20" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">🏐 5</text>
              <text x="227" y="34" textAnchor="middle" fill="#f0f9ff" fontSize="9" fontWeight="bold">Voli</text>
            </g>

            {/* Bracket for Basket (1 part) */}
            <path d="M 30 84 L 30 90 L 62 90 L 62 96 L 62 90 L 95 90 L 95 84" fill="none" stroke="#ea580c" strokeWidth="1.5" />
            <text x="62" y="108" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">1 Bagian Basket</text>

            {/* Bracket for Total (4 parts) */}
            <path d="M 30 114 L 30 120 L 160 120 L 160 126 L 160 120 L 290 120 L 290 114" fill="none" stroke="#0369a1" strokeWidth="1.5" />
            <text x="160" y="140" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="800">
              Total Seluruh Bola = 4 Bagian (20 Bola)
            </text>
          </svg>
        )}

        {/* Q4: Apel Merah : Apel Hijau = 3 : 5. Apel Hijau = 15 buah. Apel Merah = ? */}
        {shape === 'rasio_apel_merah_hijau' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" />
            <text x="160" y="24" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">
              Model Batang: Apel Merah (3) : Apel Hijau (5)
            </text>

            {/* Bar 1: Apel Merah (3 blocks of width 36) */}
            <g transform="translate(30, 36)">
              <text x="0" y="18" fill="#dc2626" fontSize="11" fontWeight="bold">🍎 Merah:</text>
              {[0, 1, 2].map((i) => (
                <rect key={i} x={65 + i * 38} y="0" width="36" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              ))}
              <text x={65 + 57} y="17" textAnchor="middle" fill="#b91c1c" fontSize="11" fontWeight="bold">? buah</text>
            </g>

            {/* Bar 2: Apel Hijau (5 blocks of width 36) */}
            <g transform="translate(30, 72)">
              <text x="0" y="18" fill="#16a34a" fontSize="11" fontWeight="bold">🍏 Hijau:</text>
              {[0, 1, 2, 3, 4].map((i) => (
                <rect key={i} x={65 + i * 38} y="0" width="36" height="26" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
              ))}
              <text x={65 + 95} y="17" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">15 buah (5 kotak)</text>
            </g>

            {/* Calculation clue below */}
            <rect x="30" y="112" width="260" height="28" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
            <text x="160" y="125" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">
              1 Kotak = 15 ÷ 5 = 3 buah
            </text>
            <text x="160" y="137" textAnchor="middle" fill="#b91c1c" fontSize="10" fontWeight="extrabold">
              Apel Merah = 3 kotak × 3 buah = 9 buah
            </text>
          </svg>
        )}

        {/* Q5: Pensil : Pulpen = 4 : 7. Pulpen = 28. Pensil = ? */}
        {shape === 'rasio_pensil_pulpen' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#c4b5fd" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              {/* Pensil Row */}
              <text x="0" y="20" fill="#6d28d9" fontSize="11" fontWeight="bold">✏️ Pensil (4):</text>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={78 + i * 28} y="4" width="26" height="24" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
              ))}
              <text x="210" y="20" fill="#6d28d9" fontSize="11" fontWeight="900">➔ ? buah</text>

              {/* Pulpen Row */}
              <text x="0" y="58" fill="#1e40af" fontSize="11" fontWeight="bold">🖊️ Pulpen (7):</text>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} x={78 + i * 28} y="42" width="26" height="24" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              ))}
            </g>

            {/* Bracket on 7 pulpen boxes */}
            <path d="M 103 92 L 103 98 L 201 98 L 201 104 L 201 98 L 299 98 L 299 92" fill="none" stroke="#2563eb" strokeWidth="1.5" />
            <text x="201" y="116" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="bold">
              7 Bagian Pulpen = 28 buah (1 Bagian = 4)
            </text>

            <rect x="50" y="126" width="220" height="20" rx="6" fill="#f3e8ff" />
            <text x="160" y="140" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">
              Pensil = 4 Bagian × 4 = 16 buah
            </text>
          </svg>
        )}

        {/* ======================= POS B ======================= */}

        {/* Q6: Rasio Satuan Buku: 4 Buku = Rp20.000 -> 1 Buku = Rp5.000 */}
        {shape === 'rasio_satuan_buku' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#6ee7b7" strokeWidth="1.5" />
            
            {/* Box 1: 4 Buku */}
            <g transform="translate(25, 24)">
              <rect x="0" y="0" width="115" height="75" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
              <text x="57" y="20" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">4 Buku Tulis</text>
              {/* Stack of 4 books */}
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={28} y={28 + i * 10} width="60" height="7" rx="2" fill="#34d399" stroke="#059669" strokeWidth="1" />
              ))}
              <rect x="10" y="82" width="95" height="20" rx="4" fill="#10b981" />
              <text x="57" y="96" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Rp20.000</text>
            </g>

            {/* Arrow & division */}
            <g transform="translate(145, 52)">
              <line x1="5" y1="15" x2="35" y2="15" stroke="#059669" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="20" y="6" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="900">÷ 4</text>
            </g>

            {/* Box 2: 1 Buku (Rasio Satuan) */}
            <g transform="translate(185, 24)">
              <rect x="0" y="0" width="110" height="75" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
              <text x="55" y="20" textAnchor="middle" fill="#064e3b" fontSize="11" fontWeight="bold">1 Buku Tulis</text>
              <rect x="35" y="32" width="40" height="18" rx="3" fill="#10b981" stroke="#047857" strokeWidth="1" />
              <text x="55" y="45" textAnchor="middle" fill="#ffffff" fontSize="12">📖</text>
              <rect x="10" y="82" width="90" height="20" rx="4" fill="#047857" />
              <text x="55" y="96" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Rp5.000</text>
            </g>

            <rect x="40" y="128" width="240" height="18" rx="4" fill="#a7f3d0" />
            <text x="160" y="141" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="extrabold">
              Rasio Satuan: Rp20.000 ÷ 4 = Rp5.000 / buku
            </text>
          </svg>
        )}

        {/* Q7: Kecepatan Bus: 180 km dalam 3 jam -> 60 km/jam */}
        {shape === 'rasio_kecepatan_bus' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
            
            {/* Bus visual */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="55" height="30" rx="6" fill="#0284c7" />
              <rect x="35" y="5" width="16" height="12" rx="2" fill="#e0f2fe" />
              <rect x="10" y="5" width="20" height="12" rx="2" fill="#e0f2fe" />
              <circle cx="15" cy="30" r="5" fill="#0f172a" />
              <circle cx="45" cy="30" r="5" fill="#0f172a" />
              <text x="65" y="20" fill="#0369a1" fontSize="11" fontWeight="bold">🚌 Bus Wisata Sekolah</text>
            </g>

            {/* Timeline track */}
            <g transform="translate(30, 68)">
              {/* Road line */}
              <line x1="0" y1="20" x2="260" y2="20" stroke="#0284c7" strokeWidth="4" />
              {/* Mile markers */}
              <circle cx="0" cy="20" r="6" fill="#0284c7" />
              <circle cx="86" cy="20" r="5" fill="#38bdf8" />
              <circle cx="173" cy="20" r="5" fill="#38bdf8" />
              <circle cx="260" cy="20" r="6" fill="#0284c7" />

              {/* Labels */}
              <text x="0" y="38" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">0 km</text>
              <text x="86" y="38" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="bold">60 km</text>
              <text x="173" y="38" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="bold">120 km</text>
              <text x="260" y="38" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">180 km</text>

              <text x="43" y="10" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Jam ke-1</text>
              <text x="130" y="10" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Jam ke-2</text>
              <text x="216" y="10" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Jam ke-3</text>
            </g>

            <rect x="50" y="122" width="220" height="24" rx="6" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
            <text x="160" y="137" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="extrabold">
              Kecepatan = 180 km ÷ 3 jam = 60 km/jam
            </text>
          </svg>
        )}

        {/* Q8: Konsumsi Bahan Bakar: 2 Liter -> 90 km, 5 Liter -> 225 km */}
        {shape === 'rasio_bensin_jarak' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              {/* Can 1: 2 Liter -> 90 km */}
              <rect x="0" y="0" width="125" height="85" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              <text x="62" y="20" textAnchor="middle" fill="#c2410c" fontSize="11" fontWeight="bold">⛽ 2 Liter Bensin</text>
              <text x="62" y="44" textAnchor="middle" fill="#ea580c" fontSize="14" fontWeight="900">90 km</text>
              <rect x="10" y="58" width="105" height="18" rx="4" fill="#ffedd5" />
              <text x="62" y="70" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="bold">1 Liter = 45 km</text>
            </g>

            <text x="160" y="65" textAnchor="middle" fill="#ea580c" fontSize="20" fontWeight="900">➔</text>

            {/* Can 2: 5 Liter -> 225 km */}
            <g transform="translate(170, 20)">
              <rect x="0" y="0" width="125" height="85" rx="10" fill="#fef2f2" stroke="#ea580c" strokeWidth="2" />
              <text x="62" y="20" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold">⛽ 5 Liter Bensin</text>
              <text x="62" y="46" textAnchor="middle" fill="#c2410c" fontSize="15" fontWeight="900">? km</text>
              <rect x="10" y="58" width="105" height="18" rx="4" fill="#fed7aa" />
              <text x="62" y="70" textAnchor="middle" fill="#7c2d12" fontSize="9" fontWeight="bold">5 × 45 km = 225 km</text>
            </g>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#fed7aa" />
            <text x="160" y="134" textAnchor="middle" fill="#7c2d12" fontSize="11" fontWeight="extrabold">
              Jarak Tempuh 5 Liter = 225 km
            </text>
          </svg>
        )}

        {/* Q9: Toko A vs Toko B (Harga Satuan Penghapus) */}
        {shape === 'rasio_toko_penghapus' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Toko A */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="125" height="92" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">🏪 Toko A</text>
              <text x="62" y="38" textAnchor="middle" fill="#475569" fontSize="10">3 Penghapus = Rp12.000</text>
              <rect x="10" y="50" width="105" height="32" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              <text x="62" y="64" textAnchor="middle" fill="#64748b" fontSize="9">Harga Satuan:</text>
              <text x="62" y="76" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">Rp4.000 / buah</text>
            </g>

            {/* VS */}
            <text x="160" y="68" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="900">VS</text>

            {/* Toko B (Winner) */}
            <g transform="translate(170, 20)">
              <rect x="0" y="0" width="125" height="92" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
              <text x="62" y="18" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">🏪 Toko B ⭐</text>
              <text x="62" y="38" textAnchor="middle" fill="#166534" fontSize="10">5 Penghapus = Rp17.500</text>
              <rect x="10" y="50" width="105" height="32" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
              <text x="62" y="64" textAnchor="middle" fill="#15803d" fontSize="9">Harga Satuan:</text>
              <text x="62" y="76" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Rp3.500 / buah</text>
            </g>

            <rect x="35" y="122" width="250" height="22" rx="6" fill="#dcfce7" />
            <text x="160" y="136" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="extrabold">
              Toko B Lebih Murah (Hemat Rp500 per buah)
            </text>
          </svg>
        )}

        {/* Q10: 4 Keliling = 12 Menit (1 keliling = 3 menit) -> 7 Keliling = 21 Menit */}
        {shape === 'rasio_lari_lapangan' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fbcfe8" strokeWidth="1.5" />
            
            {/* Running track visual */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="260" height="42" rx="21" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
              <rect x="25" y="8" width="210" height="26" rx="13" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
              <text x="130" y="25" textAnchor="middle" fill="#db2777" fontSize="11" fontWeight="bold">
                🏃 4 Keliling Lapangan = 12 Menit
              </text>
            </g>

            {/* Tape segments showing 1 keliling = 3 menit */}
            <g transform="translate(30, 72)">
              <text x="0" y="16" fill="#be185d" fontSize="10" fontWeight="bold">1 Keliling = 12 ÷ 4 = 3 menit</text>
              {/* 7 blocks */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} x={i * 37} y="22" width="34" height="22" rx="4" fill="#fce7f3" stroke="#f43f5e" strokeWidth="1" />
              ))}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <text key={i} x={17 + i * 37} y="37" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">3m</text>
              ))}
            </g>

            <rect x="40" y="126" width="240" height="20" rx="5" fill="#fce7f3" />
            <text x="160" y="140" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="extrabold">
              Total 7 Keliling = 7 × 3 menit = 21 Menit
            </text>
          </svg>
        )}

        {/* ======================= POS C ======================= */}

        {/* Q11: Tape Diagram Pita: Ani (2 blok = 10 cm) & Budi (3 blok = 15 cm) */}
        {shape === 'rasio_pita_ani_budi' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">
              Model Batang (Tape Diagram) Rasio 2 : 3
            </text>

            {/* Ani Ribbon */}
            <g transform="translate(25, 36)">
              <text x="0" y="20" fill="#b91c1c" fontSize="11" fontWeight="bold">🎀 Ani (2):</text>
              <rect x="70" y="4" width="55" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <text x="97" y="21" textAnchor="middle" fill="#b91c1c" fontSize="10" fontWeight="bold">5 cm</text>
              <rect x="127" y="4" width="55" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <text x="154" y="21" textAnchor="middle" fill="#b91c1c" fontSize="10" fontWeight="bold">5 cm</text>
              
              <text x="195" y="21" fill="#b91c1c" fontSize="11" fontWeight="bold">= 10 cm</text>
            </g>

            {/* Budi Ribbon */}
            <g transform="translate(25, 74)">
              <text x="0" y="20" fill="#1d4ed8" fontSize="11" fontWeight="bold">🎗️ Budi (3):</text>
              <rect x="70" y="4" width="55" height="26" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="97" y="21" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">5 cm</text>
              <rect x="127" y="4" width="55" height="26" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="154" y="21" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">5 cm</text>
              <rect x="184" y="4" width="55" height="26" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="211" y="21" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">5 cm</text>

              <text x="250" y="21" fill="#1d4ed8" fontSize="11" fontWeight="900">➔ ? cm</text>
            </g>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#dbeafe" />
            <text x="160" y="133" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="extrabold">
              Pita Budi = 3 bagian × 5 cm = 15 cm
            </text>
          </svg>
        )}

        {/* Q12: Teko Sirup 1 : Air 4 -> 6 Sirup : 24 Air */}
        {shape === 'rasio_sirup_air' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              {/* Pitcher 1: Dasar Rasio 1 : 4 */}
              <rect x="0" y="0" width="125" height="92" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold">Resep Awal (1 : 4)</text>
              <text x="62" y="38" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">🍷 1 Cangkir Sirup</text>
              <text x="62" y="54" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="bold">💧 4 Cangkir Air</text>
              <line x1="20" y1="62" x2="105" y2="62" stroke="#fdba74" strokeWidth="1" />
              <text x="62" y="78" textAnchor="middle" fill="#c2410c" fontSize="9" fontWeight="bold">Faktor Pengali: × 6</text>
            </g>

            <text x="160" y="65" textAnchor="middle" fill="#ea580c" fontSize="22" fontWeight="900">➔</text>

            {/* Pitcher 2: 6 Sirup -> 24 Air */}
            <g transform="translate(170, 20)">
              <rect x="0" y="0" width="125" height="92" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
              <text x="62" y="18" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="bold">Takaran Baru (×6)</text>
              <text x="62" y="38" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">🍷 6 Cangkir Sirup</text>
              <rect x="10" y="46" width="105" height="34" rx="6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
              <text x="62" y="60" textAnchor="middle" fill="#0369a1" fontSize="9">Air yang Dibutuhkan:</text>
              <text x="62" y="74" textAnchor="middle" fill="#0c4a6e" fontSize="12" fontWeight="900">6 × 4 = 24 Cangkir</text>
            </g>

            <rect x="40" y="124" width="240" height="20" rx="5" fill="#e0f2fe" />
            <text x="160" y="138" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="extrabold">
              Air yang Ditambahkan = 24 Cangkir
            </text>
          </svg>
        )}

        {/* Q13: Kaleng Cat Kuning (3) : Biru (2) -> 12 Kuning : 8 Biru = Hijau */}
        {shape === 'rasio_cat_kuning_biru' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              {/* Formula */}
              <rect x="0" y="0" width="270" height="42" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
              <text x="15" y="26" fill="#ca8a04" fontSize="11" fontWeight="bold">🎨 3 Kuning</text>
              <text x="80" y="26" fill="#15803d" fontSize="12" fontWeight="bold">+</text>
              <text x="95" y="26" fill="#2563eb" fontSize="11" fontWeight="bold">2 Biru</text>
              <text x="145" y="26" fill="#15803d" fontSize="12" fontWeight="bold">=</text>
              <text x="165" y="26" fill="#16a34a" fontSize="11" fontWeight="900">🌿 Hijau Sempurna</text>
            </g>

            {/* Proportion cards */}
            <g transform="translate(30, 72)">
              <rect x="0" y="0" width="120" height="42" rx="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5" />
              <text x="60" y="18" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">Cat Kuning</text>
              <text x="60" y="34" textAnchor="middle" fill="#713f12" fontSize="12" fontWeight="bold">3 ➔ 12 (×4)</text>

              <text x="130" y="25" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">➔</text>

              <rect x="140" y="0" width="120" height="42" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="60" y="18" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Cat Biru</text>
              <text x="60" y="34" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">2 × 4 = 8 kaleng</text>
            </g>

            <rect x="40" y="126" width="240" height="20" rx="5" fill="#dcfce7" />
            <text x="160" y="140" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="extrabold">
              Cat Biru yang Dibutuhkan = 8 Kaleng
            </text>
          </svg>
        )}

        {/* Q14: Tabel Rasio Bibit Mangga (3) vs Jambu (7) -> X = 28 */}
        {shape === 'tabel_rasio_bibit' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">
              Tabel Rasio Bibit Kebun Sekolah
            </text>

            {/* Table */}
            <g transform="translate(25, 34)">
              {/* Header */}
              <rect x="0" y="0" width="90" height="24" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="45" y="16" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Jenis Bibit</text>
              <rect x="90" y="0" width="60" height="24" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="120" y="16" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Rasio (×1)</text>
              <rect x="150" y="0" width="60" height="24" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="180" y="16" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">(×2)</text>
              <rect x="210" y="0" width="60" height="24" fill="#e2e8f0" stroke="#94a3b8" />
              <text x="240" y="16" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">(×4)</text>

              {/* Row 1: Mangga */}
              <rect x="0" y="24" width="90" height="24" fill="#fef3c7" stroke="#94a3b8" />
              <text x="45" y="40" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">🥭 Mangga</text>
              <rect x="90" y="24" width="60" height="24" fill="#ffffff" stroke="#94a3b8" />
              <text x="120" y="40" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">3</text>
              <rect x="150" y="24" width="60" height="24" fill="#ffffff" stroke="#94a3b8" />
              <text x="180" y="40" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">6</text>
              <rect x="210" y="24" width="60" height="24" fill="#fef3c7" stroke="#94a3b8" />
              <text x="240" y="40" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="900">12</text>

              {/* Row 2: Jambu */}
              <rect x="0" y="48" width="90" height="26" fill="#fce7f3" stroke="#94a3b8" />
              <text x="45" y="65" textAnchor="middle" fill="#9d174d" fontSize="10" fontWeight="bold">🍈 Jambu</text>
              <rect x="90" y="48" width="60" height="26" fill="#ffffff" stroke="#94a3b8" />
              <text x="120" y="65" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">7</text>
              <rect x="150" y="48" width="60" height="26" fill="#ffffff" stroke="#94a3b8" />
              <text x="180" y="65" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">14</text>
              <rect x="210" y="48" width="60" height="26" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
              <text x="240" y="66" textAnchor="middle" fill="#9d174d" fontSize="13" fontWeight="900">X = ?</text>
            </g>

            <rect x="40" y="122" width="240" height="22" rx="5" fill="#fce7f3" />
            <text x="160" y="136" textAnchor="middle" fill="#be185d" fontSize="10" fontWeight="extrabold">
              Pengali: 3 × 4 = 12 ➔ X = 7 × 4 = 28
            </text>
          </svg>
        )}

        {/* Q15: Resep Tepung Bolu: 5 Porsi = 250 g -> 8 Porsi = 400 g */}
        {shape === 'rasio_tepung_bolu' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
            
            <g transform="translate(25, 20)">
              {/* Box 1: 5 Porsi */}
              <rect x="0" y="0" width="125" height="85" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#c2410c" fontSize="11" fontWeight="bold">🧁 5 Porsi Bolu</text>
              <text x="62" y="42" textAnchor="middle" fill="#ea580c" fontSize="13" fontWeight="bold">250 gram tepung</text>
              <rect x="10" y="56" width="105" height="20" rx="4" fill="#ffedd5" />
              <text x="62" y="70" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="bold">1 Porsi = 50 gram</text>
            </g>

            <text x="160" y="65" textAnchor="middle" fill="#ea580c" fontSize="20" fontWeight="900">➔</text>

            {/* Box 2: 8 Porsi */}
            <g transform="translate(170, 20)">
              <rect x="0" y="0" width="125" height="85" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
              <text x="62" y="18" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">🎂 8 Porsi Bolu</text>
              <text x="62" y="42" textAnchor="middle" fill="#a16207" fontSize="13" fontWeight="900">? gram tepung</text>
              <rect x="10" y="56" width="105" height="20" rx="4" fill="#fef08a" />
              <text x="62" y="70" textAnchor="middle" fill="#713f12" fontSize="9" fontWeight="bold">8 × 50 g = 400 gram</text>
            </g>

            <rect x="40" y="122" width="240" height="22" rx="6" fill="#fef08a" />
            <text x="160" y="137" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="extrabold">
              Tepung Terigu yang Diperlukan = 400 gram
            </text>
          </svg>
        )}

        {/* ======================= POS D ======================= */}

        {/* Q16: Umur Kakak (5) & Adik (3), Total 8 = 24 tahun -> Kakak = 15 tahun */}
        {shape === 'rasio_umur_kakak_adik' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#c4b5fd" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">
              Model Batang Jumlah: Kakak (5) & Adik (3)
            </text>

            {/* Kakak */}
            <g transform="translate(25, 34)">
              <text x="0" y="18" fill="#6d28d9" fontSize="11" fontWeight="bold">Kakak (5):</text>
              {[0, 1, 2, 3, 4].map((i) => (
                <rect key={i} x={65 + i * 28} y="2" width="26" height="22" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
              ))}
              <text x="215" y="18" fill="#6d28d9" fontSize="11" fontWeight="bold">➔ ? th</text>
            </g>

            {/* Adik */}
            <g transform="translate(25, 64)">
              <text x="0" y="18" fill="#0284c7" fontSize="11" fontWeight="bold">Adik (3):</text>
              {[0, 1, 2].map((i) => (
                <rect key={i} x={65 + i * 28} y="2" width="26" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              ))}
            </g>

            {/* Total Bracket */}
            <path d="M 90 96 L 90 102 L 175 102 L 175 108 L 175 102 L 260 102 L 260 96" fill="none" stroke="#5b21b6" strokeWidth="1.5" />
            <text x="175" y="120" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">
              Total 8 Bagian (5 + 3) = 24 Tahun ➔ 1 Bagian = 3 Tahun
            </text>

            <rect x="40" y="128" width="240" height="20" rx="5" fill="#ede9fe" />
            <text x="160" y="142" textAnchor="middle" fill="#6d28d9" fontSize="10" fontWeight="extrabold">
              Umur Kakak = 5 × 3 tahun = 15 Tahun
            </text>
          </svg>
        )}

        {/* Q17: Uang Rian (7) & Dika (4), Selisih (3) = Rp15.000 -> Rian = Rp35.000 */}
        {shape === 'rasio_uang_rian_dika' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">
              Model Batang Selisih: Rian (7) & Dika (4)
            </text>

            <g transform="translate(25, 34)">
              {/* Rian (7 blocks) */}
              <text x="0" y="18" fill="#166534" fontSize="10" fontWeight="bold">Rian (7):</text>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} x={55 + i * 28} y="4" width="26" height="20" rx="3" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
              ))}

              {/* Dika (4 blocks) */}
              <text x="0" y="44" fill="#0369a1" fontSize="10" fontWeight="bold">Dika (4):</text>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={55 + i * 28} y="30" width="26" height="20" rx="3" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
              ))}

              {/* Difference highlight (last 3 blocks of Rian) */}
              <rect x={55 + 4 * 28} y="2" width="82" height="24" rx="4" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
            </g>

            {/* Bracket on difference */}
            <text x="210" y="88" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">
              Selisih 3 Bagian = Rp15.000 (1 Bagian = Rp5.000)
            </text>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="extrabold">
              Uang Saku Rian = 7 × Rp5.000 = Rp35.000
            </text>
          </svg>
        )}

        {/* Q18: Kelas 6 Laki-laki (3) : Perempuan (5), Total 40 -> Perempuan = 25 anak */}
        {shape === 'rasio_gender_kelas_6' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">
              Siswa Kelas 6 SDN 3 Loloan Timur (Total 40)
            </text>

            {/* 8 blocks representing 5 students each */}
            <g transform="translate(30, 38)">
              {/* Laki-laki: 3 blocks */}
              {[0, 1, 2].map((i) => (
                <rect key={i} x={i * 32} y="0" width="30" height="36" rx="4" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
              ))}
              {/* Perempuan: 5 blocks */}
              {[0, 1, 2, 3, 4].map((i) => (
                <rect key={i} x={96 + i * 32} y="0" width="30" height="36" rx="4" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
              ))}

              <text x="48" y="22" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">👦 3 Bag</text>
              <text x="176" y="22" textAnchor="middle" fill="#9d174d" fontSize="10" fontWeight="bold">👧 5 Bagian</text>
            </g>

            {/* Calculation ribbon */}
            <g transform="translate(30, 84)">
              <text x="130" y="14" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">
                Total 8 Bagian = 40 Siswa ➔ 1 Bagian = 5 Siswa
              </text>
            </g>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#9d174d" fontSize="11" fontWeight="extrabold">
              Siswa Perempuan = 5 × 5 = 25 Anak
            </text>
          </svg>
        )}

        {/* Q19: Tabungan Siti (3) & Dewi (4), Total = Rp350.000 -> Selisih = Rp50.000 */}
        {shape === 'rasio_tabungan_siti_dewi' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fcd34d" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">
              Tabungan Siti (3) & Dewi (4) = Rp350.000
            </text>

            <g transform="translate(30, 36)">
              {/* Siti */}
              <text x="0" y="18" fill="#ca8a04" fontSize="10" fontWeight="bold">Siti (3):</text>
              {[0, 1, 2].map((i) => (
                <rect key={i} x={60 + i * 36} y="2" width="32" height="22" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              ))}
              <text x="180" y="18" fill="#854d0e" fontSize="10">Rp150.000</text>

              {/* Dewi */}
              <text x="0" y="48" fill="#059669" fontSize="10" fontWeight="bold">Dewi (4):</text>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={60 + i * 36} y="32" width="32" height="22" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
              ))}
              <text x="215" y="48" fill="#065f46" fontSize="10">Rp200.000</text>
            </g>

            {/* Difference note */}
            <text x="160" y="112" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">
              Total 7 Bagian = Rp350.000 ➔ 1 Bagian = Rp50.000
            </text>

            <rect x="40" y="122" width="240" height="22" rx="6" fill="#fef9c3" stroke="#fde047" strokeWidth="1" />
            <text x="160" y="137" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="extrabold">
              Selisih Tabungan (4 - 3 = 1 bagian) = Rp50.000
            </text>
          </svg>
        )}

        {/* Q20: Farhan (5) & Gilang (8), Selisih (3) = 18 butir -> Gilang = 48 butir */}
        {shape === 'rasio_kelereng_farhan_gilang' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            <text x="160" y="24" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">
              Model Selisih: Farhan (5) & Gilang (8)
            </text>

            <g transform="translate(25, 34)">
              {/* Farhan 5 */}
              <text x="0" y="18" fill="#475569" fontSize="10" fontWeight="bold">Farhan (5):</text>
              {[0, 1, 2, 3, 4].map((i) => (
                <rect key={i} x={65 + i * 24} y="2" width="22" height="20" rx="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
              ))}

              {/* Gilang 8 */}
              <text x="0" y="44" fill="#0284c7" fontSize="10" fontWeight="bold">Gilang (8):</text>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <rect key={i} x={65 + i * 24} y="28" width="22" height="20" rx="3" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              ))}

              {/* Highlight selisih 3 blok */}
              <rect x={65 + 5 * 24} y="26" width="72" height="24" rx="4" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
            </g>

            <text x="160" y="96" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">
              Selisih 3 Blok = 18 Butir ➔ 1 Blok = 6 Butir
            </text>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="extrabold">
              Kelereng Gilang = 8 blok × 6 = 48 Butir
            </text>
          </svg>
        )}

        {/* ======================= POS FINAL ======================= */}

        {/* Q21: Skala Peta Harta Karun: 1 : 50.000. Jarak peta 6 cm -> Sebenarnya 3 km */}
        {shape === 'rasio_skala_peta' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
            
            {/* Map border & compass */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="85" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 2" />
              
              {/* Compass icon */}
              <circle cx="25" cy="25" r="14" fill="#ffffff" stroke="#b45309" strokeWidth="1.5" />
              <path d="M 25 14 L 28 25 L 25 23 L 22 25 Z" fill="#dc2626" />
              <path d="M 25 36 L 28 25 L 25 27 L 22 25 Z" fill="#475569" />
              <text x="25" y="11" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">U</text>

              {/* Path from school to treasure */}
              <text x="50" y="24" fill="#78350f" fontSize="10" fontWeight="bold">🏫 Pos SDN 3</text>
              <line x1="50" y1="45" x2="220" y2="45" stroke="#b45309" strokeWidth="2.5" strokeDasharray="6 4" />
              <text x="135" y="40" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="900">6 cm (pada peta)</text>
              <text x="235" y="48" fill="#b45309" fontSize="14">🏝️ 💎</text>

              {/* Scale bar indicator */}
              <rect x="50" y="58" width="170" height="18" rx="4" fill="#fde68a" />
              <text x="135" y="71" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">
                Skala 1 : 50.000 (1 cm = 50.000 cm = 0,5 km)
              </text>
            </g>

            <rect x="35" y="118" width="250" height="24" rx="6" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
            <text x="160" y="134" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="extrabold">
              Jarak Sebenarnya: 6 × 50.000 = 300.000 cm = 3 km
            </text>
          </svg>
        )}

        {/* Q22: Koin Emas (2) : Perak (3) : Perunggu (5), Total 150 -> Perunggu = 75 keping */}
        {shape === 'rasio_koin_harta_karun' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#fcd34d" strokeWidth="2" />
            
            <text x="160" y="24" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">
              👑 Koin Peti Harta Karun: 2 : 3 : 5 (Total 150)
            </text>

            {/* 3-colored segment bar */}
            <g transform="translate(30, 36)">
              {/* Emas: 2 parts (width 52) */}
              <rect x="0" y="0" width="52" height="38" rx="4" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="26" y="18" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="bold">🥇 2 Bag</text>
              <text x="26" y="30" textAnchor="middle" fill="#713f12" fontSize="9">Emas</text>

              {/* Perak: 3 parts (width 78) */}
              <rect x="52" y="0" width="78" height="38" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="91" y="18" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">🥈 3 Bagian</text>
              <text x="91" y="30" textAnchor="middle" fill="#475569" fontSize="9">Perak</text>

              {/* Perunggu: 5 parts (width 130) */}
              <rect x="130" y="0" width="130" height="38" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
              <text x="195" y="18" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="900">🥉 5 Bagian</text>
              <text x="195" y="30" textAnchor="middle" fill="#c2410c" fontSize="9" fontWeight="bold">Perunggu (? keping)</text>
            </g>

            {/* Total Bracket */}
            <text x="160" y="95" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">
              Total 10 Bagian (2 + 3 + 5) = 150 keping ➔ 1 Bagian = 15 keping
            </text>

            <rect x="40" y="118" width="240" height="24" rx="6" fill="#ffedd5" stroke="#fb923c" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="extrabold">
              Koin Perunggu = 5 × 15 = 75 Keping
            </text>
          </svg>
        )}

        {/* Q23: Tiga Petualang: Ali : Budi = 2 : 3, Budi : Candra = 4 : 5 -> 8 : 12 : 15 */}
        {shape === 'rasio_tiga_petualang' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#a78bfa" strokeWidth="2" />
            
            <text x="160" y="24" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">
              Menyamakan Rasio Perantara (Budi)
            </text>

            {/* Ladder structure */}
            <g transform="translate(35, 34)">
              {/* Row 1: Ali : Budi */}
              <rect x="0" y="0" width="115" height="30" rx="6" fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.5" />
              <text x="57" y="18" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">
                Ali : Budi = 2 : 3 (×4)
              </text>

              <text x="125" y="18" fill="#7c3aed" fontSize="12" fontWeight="bold">➔</text>
              <text x="150" y="18" fill="#581c87" fontSize="11" fontWeight="900">8 : 12</text>

              {/* Row 2: Budi : Candra */}
              <rect x="0" y="36" width="115" height="30" rx="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
              <text x="57" y="54" textAnchor="middle" fill="#3730a3" fontSize="10" fontWeight="bold">
                Budi : Candra = 4 : 5 (×3)
              </text>

              <text x="125" y="54" fill="#4338ca" fontSize="12" fontWeight="bold">➔</text>
              <text x="150" y="54" fill="#312e81" fontSize="11" fontWeight="900">12 : 15</text>
            </g>

            {/* KPK note */}
            <text x="160" y="112" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">
              KPK nilai Budi (3 dan 4) = 12
            </text>

            <rect x="40" y="122" width="240" height="22" rx="6" fill="#ede9fe" stroke="#c084fc" strokeWidth="1" />
            <text x="160" y="137" textAnchor="middle" fill="#581c87" fontSize="11" fontWeight="extrabold">
              Rasio Ali : Budi : Candra = 8 : 12 : 15
            </text>
          </svg>
        )}

        {/* Q24: Perubahan Rasio Permata: Awal 5 : 3, +6 Merah -> 2 : 1. Total awal = 48 */}
        {shape === 'rasio_transisi_permata' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" />
            
            <text x="160" y="24" textAnchor="middle" fill="#9f1239" fontSize="11" fontWeight="bold">
              Tantangan Harta Karun: Permata Mula-mula
            </text>

            <g transform="translate(25, 34)">
              {/* Box 1: Kondisi Awal */}
              <rect x="0" y="0" width="125" height="74" rx="8" fill="#fff1f2" stroke="#fb7185" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#9f1239" fontSize="10" fontWeight="bold">Kondisi Awal</text>
              <text x="62" y="36" textAnchor="middle" fill="#be123c" fontSize="10">🔴 Merah = 5 bagian</text>
              <text x="62" y="50" textAnchor="middle" fill="#0369a1" fontSize="10">🔵 Biru = 3 bagian</text>
              <text x="62" y="66" textAnchor="middle" fill="#881337" fontSize="9" fontWeight="bold">Rasio = 5 : 3</text>
            </g>

            {/* Added 6 gems arrow */}
            <g transform="translate(155, 62)">
              <text x="0" y="-12" textAnchor="middle" fill="#e11d48" fontSize="10" fontWeight="bold">+ 6 🔴</text>
              <text x="0" y="4" textAnchor="middle" fill="#e11d48" fontSize="14" fontWeight="bold">➔</text>
            </g>

            {/* Box 2: Kondisi Baru */}
            <g transform="translate(170, 34)">
              <rect x="0" y="0" width="125" height="74" rx="8" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5" />
              <text x="62" y="18" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Kondisi Baru</text>
              <text x="62" y="36" textAnchor="middle" fill="#be123c" fontSize="10">🔴 Merah = 6 bagian</text>
              <text x="62" y="50" textAnchor="middle" fill="#0369a1" fontSize="10">🔵 Biru = 3 bagian</text>
              <text x="62" y="66" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">Rasio 6:3 = 2:1</text>
            </g>

            <rect x="35" y="118" width="250" height="24" rx="6" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#881337" fontSize="10" fontWeight="extrabold">
              1 Bagian = 6 permata ➔ Awal: (5+3) × 6 = 48 Butir
            </text>
          </svg>
        )}

        {/* Q25: Denah Lapangan Skala 1 : 200 (8 cm × 5 cm -> 16 m × 10 m = 160 m²) */}
        {shape === 'rasio_lapangan_skala' && (
          <svg viewBox="0 0 320 160" className="w-full h-full select-none">
            <rect x="10" y="8" width="300" height="144" rx="14" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
            
            {/* Blueprint container */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="270" height="88" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              
              {/* Field diagram on blueprint */}
              <rect x="25" y="16" width="110" height="56" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="80" y="10" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">p = 8 cm</text>
              <text x="15" y="48" textAnchor="end" fill="#7dd3fc" fontSize="9" fontWeight="bold">l = 5 cm</text>
              <text x="80" y="48" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Denah (1:200)</text>

              {/* Conversion callout */}
              <g transform="translate(150, 16)">
                <text x="0" y="16" fill="#38bdf8" fontSize="10" fontWeight="bold">Ukuran Sebenarnya:</text>
                <text x="0" y="32" fill="#e0f2fe" fontSize="10">p = 8 × 200 = 16 m</text>
                <text x="0" y="46" fill="#e0f2fe" fontSize="10">l = 5 × 200 = 10 m</text>
              </g>
            </g>

            <rect x="35" y="118" width="250" height="24" rx="6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
            <text x="160" y="134" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="extrabold">
              Luas Nyata = 16 m × 10 m = 160 m²
            </text>
          </svg>
        )}

        {/* ======================= FALLBACK / LEGACY GEOMETRIC SHAPES ======================= */}
        {shape === 'persegi' && (
          <svg viewBox="0 0 200 160" className="w-full h-full select-none">
            <rect x="45" y="25" width="110" height="110" fill="#fef08a" stroke="#d97706" strokeWidth="3" rx="6" />
            <text x="100" y="18" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="bold">
              s = {dimensions.sisi || '8 cm'}
            </text>
            <text x="35" y="85" textAnchor="end" fill="#78350f" fontSize="13" fontWeight="bold">
              s = {dimensions.sisi || '8 cm'}
            </text>
          </svg>
        )}

        {shape === 'persegi_panjang' && (
          <svg viewBox="0 0 240 160" className="w-full h-full select-none">
            <rect x="35" y="35" width="170" height="90" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" rx="6" />
            <text x="120" y="25" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold">
              p = {dimensions.panjang || '12 cm'}
            </text>
            <text x="25" y="85" textAnchor="end" fill="#0369a1" fontSize="13" fontWeight="bold">
              l = {dimensions.lebar || '7 cm'}
            </text>
          </svg>
        )}

        {shape === 'segitiga' && (
          <svg viewBox="0 0 240 160" className="w-full h-full select-none">
            <polygon points="40,130 200,130 140,30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
            <line x1="140" y1="30" x2="140" y2="130" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
            <text x="120" y="150" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="bold">
              alas = {dimensions.alas || '10 cm'}
            </text>
            <text x="156" y="80" textAnchor="start" fill="#b91c1c" fontSize="13" fontWeight="bold">
              t = {dimensions.tinggi || '8 cm'}
            </text>
          </svg>
        )}

        {/* Generic Ratio fallback if none of above matches */}
        {!shape?.startsWith('rasio_') && !['persegi', 'persegi_panjang', 'segitiga', 'tabel_rasio_bibit'].includes(shape) && (
          <svg viewBox="0 0 300 150" className="w-full h-full select-none">
            <rect x="10" y="10" width="280" height="130" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="150" y="45" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">
              📊 Konsep Rasio Matematika
            </text>
            <rect x="35" y="65" width="100" height="35" rx="6" fill="#bfdbfe" />
            <text x="85" y="87" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">Kuantitas A</text>
            <text x="150" y="88" textAnchor="middle" fill="#2563eb" fontSize="20" fontWeight="900">:</text>
            <rect x="165" y="65" width="100" height="35" rx="6" fill="#fef08a" />
            <text x="215" y="87" textAnchor="middle" fill="#854d0e" fontSize="12" fontWeight="bold">Kuantitas B</text>
            {notes && (
              <text x="150" y="124" textAnchor="middle" fill="#64748b" fontSize="10">
                {notes}
              </text>
            )}
          </svg>
        )}
      </div>

      {/* Quick Dimension & Key Ratio Pills */}
      {dimensions && Object.keys(dimensions).length > 0 && (
        <div className="flex flex-wrap gap-1.5 justify-center mt-2">
          {Object.entries(dimensions).map(([key, val]) => (
            <span
              key={key}
              className="text-[10px] sm:text-[11px] bg-white text-slate-700 px-2.5 py-0.5 rounded-lg border border-blue-200 font-semibold shadow-2xs"
            >
              <span className="capitalize text-blue-900 font-bold">{key}:</span> {val}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
