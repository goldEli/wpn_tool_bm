/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : wpn

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 20/11/2018 20:21:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(100) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `spec` varchar(32) DEFAULT NULL,
  `index` int(10) DEFAULT NULL,
  `checked` int(10) DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goods
-- ----------------------------
BEGIN;
INSERT INTO `goods` VALUES ('03ab6ce48eac48cd85bba35a943b4c1a', '香辣豆皮', 12.00, 'http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuyonbibh3j20kf0fcwgn.jpg', '150g', 24, 1, '袋');
INSERT INTO `goods` VALUES ('2484f63b72844800ab1f0fcc1d736bd8', '麻辣牛肉丝', 35.00, 'http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhnwpbhj20i20dkjt8.jpg', '170g', 11, 1, '袋');
INSERT INTO `goods` VALUES ('3c0f69d1b3b648269efc537f4632e733', '山猪肉香肠', 58.00, 'http://wx3.sinaimg.cn/small/a0f306dcly1fx57b5m7z7j20ri0kntc7.jpg', '500g', 4, 1, '袋');
INSERT INTO `goods` VALUES ('3e302fef6fe14c318e31488245e4d265', '勾魂兔腿', 28.00, 'http://wx2.sinaimg.cn/mw690/a0f306dcgy1fw46py0lybj20mo0h07d0.jpg', '2只', 5, 1, '袋');
INSERT INTO `goods` VALUES ('4ab4faf7777d430ca4e45b54a5e517e4', '冷香兔（五香蒜蓉味）', 28.00, 'https://s1.ax1x.com/2018/06/28/PiGilT.jpg', '200g', 8, 1, '袋');
INSERT INTO `goods` VALUES ('5691748be31148e889abc7942fa85850', '冷吃鸡尖', 18.00, 'https://s1.ax1x.com/2018/06/28/PiGmkR.jpg', '170g', 13, 1, '袋');
INSERT INTO `goods` VALUES ('5d7d51bbd22f42c380954701af150fe2', '金牌冷吃牛肉', 35.00, 'https://s1.ax1x.com/2018/06/28/Pi8xTs.jpg', '170g', 12, 1, '袋');
INSERT INTO `goods` VALUES ('610ddec1f4864cc4939b1e46f1d1df88', '香卤鸭心 ', 13.00, 'http://wx4.sinaimg.cn/small/a0f306dcgy1fwshikkv8ij20eo0b0wfr.jpg', '100g', 16, 1, '袋');
INSERT INTO `goods` VALUES ('622b97c79ac94036becea199d2f49748', '五香牛肉', 35.00, 'http://wx2.sinaimg.cn/mw690/a0f306dcgy1fuyoycl79nj20ir0e2go9.jpg', '150g', 10, 1, '袋');
INSERT INTO `goods` VALUES ('6c714c6374704e628c8d1de5a35d5d9e', '黑芝麻酥', 18.00, 'https://s1.ax1x.com/2018/06/28/PiGufx.jpg', '200g', 21, 1, '袋');
INSERT INTO `goods` VALUES ('75e84e7cfbee4a6abaf6eb62ce927079', '抓财掌中宝', 26.00, 'http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuhfyf7l7lj20ht0dd771.jpg', '120g', 6, 1, '袋');
INSERT INTO `goods` VALUES ('8914cd90a82a46feb11a9194e7a7bd66', '脱骨鸭掌', 26.00, 'http://wx1.sinaimg.cn/mw690/a0f306dcgy1fw46pkb0atj20kz0fqwma.jpg', '120g', 15, 1, '袋');
INSERT INTO `goods` VALUES ('8bbe787628ce48f187d63713c7cbe3f7', '金牌冷吃兔', 26.00, 'https://s1.ax1x.com/2018/06/28/Pi8vwj.jpg', '200g', 7, 1, '袋');
INSERT INTO `goods` VALUES ('94100a55779b4debba0fedce94910302', '野生小鱼', 28.00, 'https://s1.ax1x.com/2018/06/28/Pi8jmQ.jpg', '200g', 17, 1, '袋');
INSERT INTO `goods` VALUES ('a226689bc4fa4c8b8ea4a619b04a8340', '冷吃鱼', 22.00, 'https://s1.ax1x.com/2018/06/28/PiG9f0.jpg', '200g', 18, 1, '袋');
INSERT INTO `goods` VALUES ('a7f0a227991140f7a1b96d21961ba43d', '冬菜扣肉', 27.00, 'http://wx4.sinaimg.cn/mw690/a0f306dcly1fxd71gmkrjj20jn0eq41w.jpg', '400g', 2, 1, '袋');
INSERT INTO `goods` VALUES ('a8c789d1b50c42be9f2c21d26c74d435', '礼盒包装', 5.00, 'http://wx2.sinaimg.cn/mw690/a0f306dcgy1fvfzhh4zarj20kt0fgt99.jpg', NULL, 1, 1, '个');
INSERT INTO `goods` VALUES ('b2857e8776b6441a823b6a6cf1093ce8', '原味米花酥', 13.00, 'https://s1.ax1x.com/2018/06/28/PiGV0J.jpg', '150g', 19, 1, '袋');
INSERT INTO `goods` VALUES ('c9d3721527074da7bec4dd72968f7348', '原味花生酥', 16.00, 'https://s1.ax1x.com/2018/06/28/PiGZ79.jpg', '200g', 20, 1, '袋');
INSERT INTO `goods` VALUES ('ca0c6f03684e4ea594a2ff46a889654a', '牛肉豆豉', 19.00, 'https://s1.ax1x.com/2018/06/28/PiGkXF.jpg', '250g', 23, 1, '瓶');
INSERT INTO `goods` VALUES ('e319b1d086b34b079d1f3af1b625b4f4', '香辣兔头', 24.00, 'https://s1.ax1x.com/2018/06/28/PiGPpV.jpg', '2只装', 9, 1, '袋');
INSERT INTO `goods` VALUES ('ef6679ff579540d89de21ca2f033c99c', '红糖夹沙肉', 27.00, 'http://wx3.sinaimg.cn/mw690/a0f306dcly1fxd71ht5q6j20jn0eqwgv.jpg', '500g', 3, 1, '袋');
INSERT INTO `goods` VALUES ('f9f1c082b3424bf78651e1f0ed2243e4', '怪味酥', 12.00, 'https://s1.ax1x.com/2018/06/28/PiGMp6.jpg', '150g', 22, 1, '袋');
INSERT INTO `goods` VALUES ('fef331f403f2421b8866cfa222631fef', '吮指鸭舌', 36.00, 'http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhktv1jj20m70goztm.jpg', '150g', 14, 1, '袋');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(100) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `pwd` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('0000', 'kkk', '123');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
