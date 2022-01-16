-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 24 Ara 2021, 22:13:57
-- Sunucu sürümü: 10.4.21-MariaDB
-- PHP Sürümü: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `medeniyet_emlak`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ekip`
--

CREATE TABLE `ekip` (
  `ekip_id` int(11) NOT NULL,
  `ekip_isim` text NOT NULL,
  `ekip_soyisim` text NOT NULL,
  `ekip_görev` text NOT NULL,
  `ekip_github` text NOT NULL,
  `ekip_linkedin` text NOT NULL,
  `ekip_mail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `ekip`
--

INSERT INTO `ekip` (`ekip_id`, `ekip_isim`, `ekip_soyisim`, `ekip_görev`, `ekip_github`, `ekip_linkedin`, `ekip_mail`) VALUES
(2, 'Hasan Semih ', 'AKTAŞ', 'Front-End Developer', 'hsemihaktas', 'hsemihaktas', 'hsemihaktas@gmail.com');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ilanlar`
--

CREATE TABLE `ilanlar` (
  `ilan_id` int(11) NOT NULL,
  `ilan_ismi` text NOT NULL,
  `ilan_fiyatı` int(11) NOT NULL,
  `ilan_özellikleri` text NOT NULL,
  `ilan_şehir` text NOT NULL,
  `ilan_satışTürü` text NOT NULL,
  `ilan_aktiflik` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `ilanlar`
--

INSERT INTO `ilanlar` (`ilan_id`, `ilan_ismi`, `ilan_fiyatı`, `ilan_özellikleri`, `ilan_şehir`, `ilan_satışTürü`, `ilan_aktiflik`) VALUES
(1, 'İlan1', 100000, 'Manzarası Çok iyi', 'İstanbul', 'Satılık', 'Aktif'),
(3, 'İlan3', 8000000, 'Okula Çok Yakın', 'İstanbul', 'Kiralık', 'Aktif'),
(4, 'İlan4', 9999999, 'Hastanaye Çok Yakın', 'İstanbul', 'Kiralık', 'Aktif');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sirket`
--

CREATE TABLE `sirket` (
  `sirket_id` int(11) NOT NULL,
  `sirket_adı` text NOT NULL,
  `sirket_sektörü` text NOT NULL,
  `sirket_amaci` text NOT NULL,
  `sirket_adresi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `sirket`
--

INSERT INTO `sirket` (`sirket_id`, `sirket_adı`, `sirket_sektörü`, `sirket_amaci`, `sirket_adresi`) VALUES
(1, 'Medeniyet Emlak', 'Gayrimenkul Emlak Ticareti', 'Emlak Satış', 'İstanbul');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `ekip`
--
ALTER TABLE `ekip`
  ADD PRIMARY KEY (`ekip_id`);

--
-- Tablo için indeksler `ilanlar`
--
ALTER TABLE `ilanlar`
  ADD PRIMARY KEY (`ilan_id`);

--
-- Tablo için indeksler `sirket`
--
ALTER TABLE `sirket`
  ADD PRIMARY KEY (`sirket_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `ekip`
--
ALTER TABLE `ekip`
  MODIFY `ekip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `ilanlar`
--
ALTER TABLE `ilanlar`
  MODIFY `ilan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tablo için AUTO_INCREMENT değeri `sirket`
--
ALTER TABLE `sirket`
  MODIFY `sirket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
