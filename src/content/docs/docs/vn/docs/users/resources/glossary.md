---
title: Thuật ngữ
description: >-
  Tài liệu tham khảo đầy đủ từ A đến Z về các thuật ngữ được dùng trong hệ sinh
  thái Mezo.
topic: users
---

Tài liệu tham khảo đầy đủ về các thuật ngữ được dùng trong hệ sinh thái Mezo. Với các thuật ngữ riêng của Mezo Earn, hãy xem [Thuật ngữ Mezo Earn](/docs/vn/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker (nhà tạo lập thị trường tự động). Một loại sàn giao dịch phi tập trung dùng pool thanh khoản và công thức toán học thay cho sổ lệnh để xác định giá tài sản và khớp giao dịch. Mezo Pools dùng AMM theo kiểu Aerodrome, với đường cong tích hằng số cho các cặp biến động và đường cong ổn định cho các cặp tương quan. Xem [Tổng quan về Mezo Pools](/docs/vn/docs/users/mezo-earn/pools).

## Trình khám phá khối

Công cụ web để xem giao dịch, địa chỉ và dữ liệu onchain. Trình khám phá mainnet của Mezo nằm tại [explorer.mezo.org](https://explorer.mezo.org/) và trình khám phá testnet nằm tại [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

Hệ số nhân áp dụng cho một vị thế veBTC khi có phiếu bầu veMEZO hướng vào vị thế đó. Không có boost, veBTC hoạt động ở mức 1x. Với boost tối đa, veBTC hoạt động ở mức 5x. Mức boost phụ thuộc vào tỷ phần tương đối của bạn trong tổng lượng veBTC và tổng lượng veMEZO của hệ thống. Xem [Cơ chế boost](/docs/vn/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Trọng số được boost

Trọng số phiếu bầu tổng hợp khi veBTC và veMEZO được ghép cặp với nhau. Được tính bằng trọng số veBTC của bạn nhân với hệ số boost (từ 1x đến 5x). Trọng số được boost quyết định phần phí bạn nhận được và mức ảnh hưởng của bạn đối với lượng phát thải.

## BTC

Bitcoin. BTC là token gas gốc trên Mezo (với 18 chữ số thập phân) và là tài sản thế chấp chính để đúc [MUSD](#musd). Mọi giao dịch trên Mezo đều được thanh toán bằng BTC.

## Ví BTC

Ví gốc Bitcoin dùng để nạp BTC trực tiếp vào Mezo. Các ví được hỗ trợ gồm UniSat, OKX và Xverse. Các định dạng địa chỉ được hỗ trợ là Legacy (P2PKH), Native SegWit (P2WPKH) và Nested SegWit (P2SH-P2WPKH). Xem [Nạp tài sản](/docs/vn/docs/users/getting-started/deposit-assets).

## Chain ID

Mã định danh dạng số của một mạng blockchain. Mezo Mainnet dùng chain ID `31612` và Mezo Testnet dùng chain ID `31611`. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## Chain Splitter

Splitter đầu tiên trong hệ thống phân chia lượng phát thải. Splitter này quyết định tỷ lệ lượng phát thải MEZO dành cho validator (20%) so với phần còn lại của hệ sinh thái (80%). Tỷ lệ này hiện được cố định và khóa thông qua quản trị. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Cliff

Khoảng thời gian chờ trước khi token bắt đầu được mở khóa. Trong lịch vesting của Mezo, phần phân bổ cho Đội ngũ và Nhà đầu tư có cliff 1 năm tính từ TGE, nghĩa là không có token nào được mở khóa trong 12 tháng đầu tiên. Xem [Phân bổ token](/docs/vn/docs/users/mezo/token-distribution).

## Tài sản thế chấp

Tài sản được cầm cố để bảo đảm cho một khoản vay. Trên Mezo, BTC được nạp làm tài sản thế chấp để vay [MUSD](#musd). Nếu giá trị tài sản thế chấp giảm quá thấp so với khoản nợ, vị thế có thể bị [thanh lý](#thanh-lý). Xem [Vay và đúc MUSD](/docs/vn/docs/users/borrow/mint-musd).

## Tài sản thế chấp dư

Phần tài sản thế chấp còn lại sau khi một [trove](#trove) bị quy đổi toàn bộ. Phần dư này được chuyển vào một hợp đồng tạm giữ để người vay nhận lại. Xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).

## Tỷ lệ thế chấp (ICR)

Individual Collateralization Ratio (tỷ lệ thế chấp cá nhân). Tỷ lệ giữa giá trị tính bằng đô la của tài sản thế chấp trong một trove và tổng nợ của trove đó. Ví dụ: nếu tài sản thế chấp BTC của bạn trị giá \$13.000 và khoản nợ của bạn là \$10.000, thì ICR của bạn là 130%. Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## CometBFT

Công cụ đồng thuận nền tảng của Mezo, trước đây có tên là Tendermint. CometBFT cung cấp cơ chế đồng thuận chịu lỗi Byzantine (Byzantine Fault Tolerant), giúp các khối trên mạng Mezo đạt tính hoàn tất (finality) nhanh chóng.

## Cosmos SDK

Framework dạng mô-đun dùng để xây dựng blockchain Mezo. Cosmos SDK cung cấp tầng ứng dụng, còn [CometBFT](#cometbft) đảm nhận việc đồng thuận. Kiến trúc này cho phép Mezo hỗ trợ cả chức năng gốc của Cosmos lẫn chức năng tương thích [EVM](#evm).

## Tỷ lệ thế chấp tới hạn (CCR)

Ngưỡng thế chấp trên toàn hệ thống, được đặt ở mức 150%. Khi tỷ lệ thế chấp tổng (TCR) giảm xuống dưới CCR, hệ thống chuyển sang [Recovery Mode](#recovery-mode). Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## dApp

Decentralized Application (ứng dụng phi tập trung). Ứng dụng phần mềm chạy trên blockchain thay vì trên máy chủ tập trung. Nhà phát triển có thể xây dựng dApp trên Mezo bằng các công cụ EVM tiêu chuẩn. Xem [Yêu cầu đối với dApp](/docs/vn/docs/developers/getting-started/dapp-requirements).

## Suy giảm

Sự giảm dần của trọng số phiếu bầu khi một khoản khóa tiến gần đến thời điểm hết hạn. Quyền biểu quyết của veBTC và veMEZO suy giảm tuyến tính theo thời gian. Bạn có thể đặt lại mức suy giảm bằng cách gia hạn khoản khóa. Xem [Tổng quan về veBTC](/docs/vn/docs/users/mezo-earn/lock/vebtc) và [Tổng quan về veMEZO](/docs/vn/docs/users/mezo-earn/lock/vemezo).

## Người ủy thác

Người tham gia ủy thác khoản stake hoặc quyền biểu quyết của mình cho một [validator](#validator). Validator có thể chia sẻ phần thưởng với người ủy thác, dù điều này không bắt buộc.

## Ecosystem Splitter

Splitter thứ hai trong hệ thống phân chia lượng phát thải. Splitter này chia lượng phát thải không dành cho validator giữa [gauge staking](#gauge-staking) (90%) và [gauge không staking](#gauge-không-staking) (10%); phần sau cấp vốn cho [MEZO Gauges](#mezo-gauge). Tỷ lệ này do phiếu bầu veBTC quyết định. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Lượng phát thải

Lượng token MEZO mới được phân phối mỗi epoch cho các gauge staking, validator và người nắm giữ veMEZO (dưới dạng rebase). Lượng phát thải tuân theo lịch halving lấy cảm hứng từ Bitcoin, bắt đầu ở mức 25% mỗi năm và giảm dần xuống 2% sau năm thứ 8. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Epoch

Chu kỳ 7 ngày chi phối việc bỏ phiếu và phân phối phần thưởng trong Mezo Earn. Mỗi epoch bắt đầu vào Thứ Năm hằng tuần lúc 00:00 UTC. Phiếu bầu không được chuyển tiếp từ epoch này sang epoch khác. Xem [Tổng quan về veBTC](/docs/vn/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Giao diện tiêu chuẩn cho token có thể thay thế (fungible) trên các blockchain tương thích EVM. Token được chuyển qua cầu nối từ Ethereum sang Mezo được biểu diễn dưới dạng token mERC-20 (ví dụ: mUSDC, mUSDT). Xem [Cầu nối](/docs/vn/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine (máy ảo Ethereum). Môi trường thực thi hợp đồng thông minh trên các blockchain tương thích Ethereum. Mezo tương thích EVM, nghĩa là nhà phát triển có thể triển khai hợp đồng Solidity bằng các công cụ quen thuộc như Hardhat và Foundry. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## Ví EVM

Ví tương thích Ethereum (ví dụ: MetaMask, Rabby) dùng để tương tác với tầng EVM của Mezo. Ví EVM được dùng để tương tác với dApp, thực hiện swap và quản lý vị thế trên Mezo. Xem [Kết nối ví của bạn](/docs/vn/docs/users/getting-started/connect).

## Faucet

Dịch vụ phân phối một lượng nhỏ token testnet phục vụ mục đích phát triển. Faucet testnet của Mezo cung cấp BTC thử nghiệm để triển khai và kiểm thử dApp trên Mezo Testnet.

## Bồi hoàn gas

Khoản hoàn trả 200 MUSD được trả cho bên gọi hàm [thanh lý](#thanh-lý), kèm theo 0,5% tài sản thế chấp bị thanh lý. Cơ chế này giúp việc thanh lý luôn có lãi cho bên gọi, kể cả khi mạng hoạt động cao. 200 MUSD này được khấu trừ khi khoản vay được mở và được hoàn lại khi khoản vay được đóng theo cách thông thường. Xem [Kiến trúc MUSD](/docs/vn/docs/users/borrow/architecture-and-terminology).

## Gauge

Hợp đồng thông minh nhận và phân phối phần thưởng dựa trên phiếu bầu. Một gauge nhận được càng nhiều trọng số phiếu bầu thì phần lượng phát thải MEZO của gauge đó trong epoch đó càng lớn. Các loại gauge gồm [gauge staking](#gauge-staking), [gauge boost veBTC](#gauge-boost-vebtc) và [gauge không staking](#gauge-không-staking) như [MEZO Gauges](#mezo-gauge). Xem [Thuật ngữ Mezo Earn](/docs/vn/docs/users/mezo-earn/overview/glossary).

## Lãi suất chung

Một mức lãi suất duy nhất do quản trị đặt ra, áp dụng cho mọi khoản vay MUSD mới mở. Khi khoản vay đã được mở, khoản vay đó giữ nguyên lãi suất tại thời điểm tạo, kể cả khi lãi suất chung thay đổi. Người dùng có thể [tái cấp vốn](#tái-cấp-vốn) để áp dụng lãi suất chung hiện hành. Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## Quản trị

Hệ thống mà qua đó người nắm giữ veBTC định hình các tham số và lượng phát thải của giao thức. veMEZO tăng quyền biểu quyết nhưng không có quyền quản trị độc lập. Xem [Quản trị](/docs/vn/docs/users/mezo/governance).

## Lịch halving

Mô hình lấy cảm hứng từ Bitcoin, chi phối lượng phát thải MEZO. Tốc độ phát thải giảm một nửa khoảng mỗi 2 năm: 25% trong năm 0-2, 12,5% trong năm 2-4, 6,25% trong năm 4-8, sau đó ổn định vĩnh viễn ở mức 2%. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Tổn thất tạm thời

Khoản lỗ tiềm ẩn mà nhà cung cấp thanh khoản gặp phải khi tỷ lệ giá của các tài sản trong pool thay đổi, so với việc chỉ đơn giản nắm giữ chúng. Đây là đặc điểm vốn có của các pool dựa trên AMM và rõ rệt hơn ở [pool biến động](#pool-biến-động).

## Khoản khuyến khích

Phần thưởng được đặt trên các gauge để thu hút phiếu bầu. Các giao thức hoặc người dùng gửi khoản khuyến khích (bằng bất kỳ token ERC-20 nào) để thu hút quyền biểu quyết về những gauge cụ thể. Khoản khuyến khích tạo nên [thị trường ghép cặp](#thị-trường-ghép-cặp) giữa người nắm giữ veBTC và người nắm giữ veMEZO. Xem [Tổng quan về bỏ phiếu](/docs/vn/docs/users/mezo-earn/vote).

## Thanh lý

Việc buộc đóng một [trove](#trove) không đủ tài sản thế chấp. Một trove có thể bị thanh lý khi [ICR](#tỷ-lệ-thế-chấp-icr) của trove giảm xuống dưới 110%. Ngưỡng thanh lý vẫn giữ ở mức 110% ngay cả trong [Recovery Mode](#recovery-mode). [Stability Pool](#stability-pool) hấp thụ khoản nợ, và tài sản thế chấp bị thanh lý được phân phối cho những người gửi vào Stability Pool. Xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).

## Pool thanh khoản

Hợp đồng thông minh nắm giữ lượng dự trữ của hai token, cho phép giao dịch phi tập trung. Người dùng gửi tài sản vào pool để trở thành nhà cung cấp thanh khoản và kiếm phí giao dịch. Xem [Tổng quan về Mezo Pools](/docs/vn/docs/users/mezo-earn/pools).

## Khóa

Hành động cam kết BTC hoặc MEZO trong một khoảng thời gian nhất định để nhận [veBTC](#vebtc) hoặc [veMEZO](#vemezo). Khoản khóa càng dài thì trọng số phiếu bầu ban đầu càng cao. Khoản khóa veBTC kéo dài từ 1 đến 28 ngày; khoản khóa veMEZO kéo dài từ 1 tuần đến 4 năm. Xem [Tổng quan về veBTC](/docs/vn/docs/users/mezo-earn/lock/vebtc) và [Tổng quan về veMEZO](/docs/vn/docs/users/mezo-earn/lock/vemezo).

## LP token

Liquidity Provider token (token của nhà cung cấp thanh khoản). Token ERC-20 bạn nhận được khi gửi tài sản vào một [pool thanh khoản](#pool-thanh-khoản). LP token đại diện cho tỷ phần của bạn trong lượng dự trữ của pool và cho bạn quyền hưởng một phần phí giao dịch. Xem [Tổng quan về Mezo Pools](/docs/vn/docs/users/mezo-earn/pools).

## Mainnet

Mạng blockchain vận hành chính thức, nơi xử lý tài sản và giao dịch thật. Mezo Mainnet có chain ID `31612` và dùng BTC làm gas. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## Thị trường ghép cặp

Cơ chế kinh tế trong đó người nắm giữ veBTC có thể thu hút phiếu bầu veMEZO bằng cách đặt [khoản khuyến khích](#khoản-khuyến-khích) trên gauge boost của mình, còn người nắm giữ veMEZO có thể kiếm lợi suất bằng cách bỏ phiếu cho các gauge có khoản khuyến khích hấp dẫn. Xem [Thị trường ghép cặp](/docs/vn/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Token gốc của Mezo, dùng để tăng quyền biểu quyết và tác động đến nơi nhận phí giao thức cũng như khoản khuyến khích. MEZO có thể được khóa thành [veMEZO](#vemezo) để nhân trọng số phiếu bầu veBTC lên tới 5x và nhận phần thưởng rebase. Tổng cung lúc khởi tạo (genesis) là 1.000.000.000 MEZO. Xem [Tổng quan về MEZO](/docs/vn/docs/users/mezo).

## Mezo App

Giao diện web chính tại [mezo.org](https://mezo.org) để tương tác với mạng Mezo. Từ Mezo App, người dùng có thể nạp tài sản, chuyển qua cầu nối, vay MUSD, cung cấp thanh khoản, khóa token và bỏ phiếu cho các gauge.

## Mezo Borrow

Tính năng trong Mezo App cho phép người dùng nạp BTC làm tài sản thế chấp và vay [MUSD](#musd) dựa trên tài sản đó. Mỗi vị thế vay được gọi là một [trove](#trove). Xem [Vay và đúc MUSD](/docs/vn/docs/users/borrow/mint-musd).

## Mezo Bridge

Cầu nối gốc để nạp và rút tài sản giữa Mezo với Ethereum hoặc Bitcoin. Hỗ trợ BTC, tBTC và các token mERC-20. Xem [Cầu nối](/docs/vn/docs/users/mainnet/bridges).

## Mezo Earn

Hệ thống kiếm lợi nhuận và quản trị toàn diện trên Mezo, bao gồm việc khóa ([veBTC](#vebtc), [veMEZO](#vemezo)), bỏ phiếu cho [gauge](#gauge), cung cấp thanh khoản trong [pool](#pool-thanh-khoản) và gửi tiền vào [vault](#musd-savings-vault). Xem [Tổng quan về Mezo Earn](/docs/vn/docs/users/mezo-earn/overview).

## MEZO Gauge

Một [gauge không staking](#gauge-không-staking) mà người nắm giữ veMEZO bỏ phiếu để hướng lượng phát thải MEZO đến các pool thanh khoản MUSD bên ngoài Mezo — Curve và Uniswap trên Ethereum, và Aerodrome trên Base. Được cấp vốn từ nhánh không staking của lượng phát thải (hiện là 8% phần thưởng phát thải hằng tuần). Xem [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

Thị trường trong Mezo App dành cho việc swap token. Sử dụng [hợp đồng router](#hợp-đồng-router) để định tuyến giao dịch qua các [pool thanh khoản](#pool-thanh-khoản) hiện có.

## Mezo Passport

Gói dành cho nhà phát triển, xây dựng trên RainbowKit, cung cấp các tùy chọn kết nối ví cho cả ví Bitcoin lẫn ví EVM. Mezo Passport tích hợp với viem và wagmi để đơn giản hóa việc quản lý ví. Xem [Cấu hình Mezo Passport](/docs/vn/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

Hệ thống pool thanh khoản trên Mezo, hoạt động như các nguồn dự trữ thanh khoản onchain tự động cho việc swap token. Các pool dùng AMM theo kiểu Aerodrome và có hai loại: [biến động](#pool-biến-động) và [ổn định](#pool-ổn-định). Xem [Tổng quan về Mezo Pools](/docs/vn/docs/users/mezo-earn/pools).

## Tỷ lệ thế chấp tối thiểu (MCR)

Tỷ lệ thế chấp tối thiểu bắt buộc đối với một [trove](#trove), được đặt ở mức 110%. Nếu [ICR](#tỷ-lệ-thế-chấp-icr) của một trove giảm xuống dưới MCR, trove đó có thể bị [thanh lý](#thanh-lý). Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## MUSD

Stablecoin được bảo đảm bằng Bitcoin của Mezo, neo giá ở mức \$1 USD. Người dùng vay MUSD bằng cách nạp BTC làm tài sản thế chấp vào một [trove](#trove). Tỷ giá neo được duy trì nhờ cơ chế [quy đổi](#quy-đổi) và [Stability Pool](#stability-pool). Xem [Tổng quan về MUSD](/docs/vn/docs/users/borrow).

## MUSD Bridge

Cầu nối cross-chain để chuyển MUSD giữa Mezo và Ethereum, vận hành bằng giao thức [Native Token Transfer (NTT)](#wormhole-ntt) của Wormhole. Xem [MUSD Bridge](/docs/vn/docs/users/borrow/musd-bridge).

## MUSD Savings Rate Gauge

Một [gauge staking](#gauge-staking) dành cho [MUSD Savings Vault](#musd-savings-vault). Người dùng gửi MUSD vào vault tiết kiệm có thể stake token biên nhận sMUSD của mình để kiếm lượng phát thải MEZO, còn những người bỏ phiếu bằng veBTC cho gauge này kiếm được lợi suất MUSD từ phí giao thức. Xem [Vault](/docs/vn/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Sản phẩm tiết kiệm gốc của Mezo dành cho người nắm giữ MUSD. Gửi MUSD để nhận một phần phí giao thức phát sinh từ hoạt động vay (lãi, phí phát hành, phí tái cấp vốn). Bạn nhận sMUSD làm token biên nhận đại diện cho phần của mình. Xem [Vault](/docs/vn/docs/users/mezo-earn/vaults).

## Gauge không staking

Một [gauge](#gauge) không có token staking, được bỏ phiếu bằng veMEZO. Thay vì trả thưởng cho người stake trên Mezo, lượng phát thải của gauge này được chuyển đến một đích do gauge chỉ định — với [MEZO Gauges](#mezo-gauge), đó là một pool thanh khoản trên chuỗi khác. Việc bỏ phiếu cho gauge loại này độc lập với việc bỏ phiếu gauge bằng veBTC và với cơ chế ghép cặp [boost](#boost). Xem [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges).

## Node

Máy tính chạy client chuỗi Mezo (mezod) và tham gia vào mạng. Các loại node gồm node [validator](#validator) (đồng thuận và tạo khối), node RPC (endpoint API cho dApp) và seed node (khởi động mạng). Xem [Validator Kit](/docs/vn/docs/developers/mezo-nodes/validator-kit).

## Oracle

Dịch vụ cung cấp dữ liệu bên ngoài (chẳng hạn như giá tài sản) cho hợp đồng thông minh onchain. Mezo dùng Skip Connect làm oracle chính, được tích hợp trực tiếp vào node validator. Các oracle bên thứ ba như Pyth, Stork và Supra cũng có sẵn. Xem [Hạ tầng oracle](/docs/vn/docs/developers/architecture/oracles).

## Phí khởi tạo khoản vay

Khoản phí một lần được tính khi vay MUSD, bằng 0,1% số tiền vay. Phí này được cộng vào tiền gốc của khoản vay và cũng phát sinh lãi. Khi [tái cấp vốn](#tái-cấp-vốn), bạn sẽ chịu phí khởi tạo cho việc tái cấp vốn (bằng một phần của mức phí thông thường). Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value (giá trị do giao thức kiểm soát). Hợp đồng quản lý phí thu được từ hoạt động vay và tái cấp vốn MUSD. Phí được phân bổ giữa việc trả dần khoản vay khởi động và hệ thống gauge. Khi khoản vay khởi động đã được trả hết, phí sẽ tích lũy thành thanh khoản thuộc sở hữu giao thức trong [Stability Pool](#stability-pool). Xem [Kiến trúc MUSD](/docs/vn/docs/users/borrow/architecture-and-terminology).

## Poke

Giao dịch làm mới trọng số được boost của một vị thế veBTC. Cần thực hiện sau khi thay đổi phiếu bầu veMEZO, gia hạn khoản khóa hoặc thêm BTC. Nếu không poke, các thay đổi về boost sẽ không có hiệu lực. Xem [Thuật ngữ Mezo Earn](/docs/vn/docs/users/mezo-earn/overview/glossary).

## Pool Factory

Hợp đồng thông minh triển khai các pool thanh khoản mới trên Mezo. Hiện do đội ngũ Mezo quản lý, với kế hoạch mở việc tạo pool không cần cấp phép (permissionless) trong tương lai. Địa chỉ trên mainnet: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Xem [Mezo Pools (dành cho nhà phát triển)](/docs/vn/docs/developers/features/mezo-pools).

## Portal Bridge

Giao diện người dùng tại [portalbridge.com](https://portalbridge.com/) để chuyển MUSD qua cầu nối giữa Mezo và Ethereum bằng giao thức Wormhole NTT. Xem [MUSD Bridge](/docs/vn/docs/users/borrow/musd-bridge).

## Nguồn cấp giá

Dữ liệu onchain do [oracle](#oracle) cung cấp, phản ánh giá thị trường hiện tại của tài sản. Mezo dùng Skip Connect để xác định giá tài sản trong quá trình đồng thuận khối và ghi chúng vào trạng thái onchain. Xem [Hạ tầng oracle](/docs/vn/docs/developers/architecture/oracles).

## Rebase

Các khoản phân phối chống pha loãng dành cho người nắm giữ veMEZO, trích từ lượng phát thải MEZO hằng tuần. Khi tỷ lệ khóa (nguồn cung veMEZO / tổng cung MEZO) thấp, một phần lớn hơn của lượng phát thải sẽ dành cho rebase, giúp bảo vệ những người khóa sớm khỏi bị pha loãng. Khi lượng MEZO được khóa tăng lên, phần dành cho rebase sẽ thu hẹp lại. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Recovery Mode

Trạng thái an toàn tạm thời, được kích hoạt khi tỷ lệ thế chấp tổng (TCR) trên toàn hệ thống giảm xuống dưới [CCR](#tỷ-lệ-thế-chấp-tới-hạn-ccr) 150%. Trong Recovery Mode, ngưỡng thanh lý vẫn giữ ở mức 110% (khác với Liquity v1, MUSD không mở rộng phạm vi thanh lý trong Recovery Mode). Tuy nhiên, không thể mở khoản vay mới dưới mức 150%, và việc tái cấp vốn bị chặn. Xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).

## Quy đổi

Hành động đổi MUSD lấy lượng BTC có giá trị tương đương tính bằng đô la, trực tiếp từ giao thức. Bất kỳ người nắm giữ MUSD nào cũng có thể quy đổi, bất kể họ có phải là người vay hay không. Việc quy đổi nhắm vào [trove](#trove) có tỷ lệ thế chấp thấp nhất trước. Cơ chế này giúp duy trì tỷ giá neo \$1 của MUSD. Xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).

## Tái cấp vốn

Quy trình cập nhật lãi suất của một khoản vay theo [lãi suất chung](#lãi-suất-chung) hiện hành. Việc tái cấp vốn chịu mức phí khởi tạo thấp hơn nhưng giúp bạn không phải đóng rồi mở lại khoản vay. Bạn cũng có thể tái cấp vốn để mở rộng hạn mức tín dụng nếu giá BTC đã tăng. Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## Hợp đồng router

Hợp đồng thông minh định tuyến các giao dịch swap token qua những [pool thanh khoản](#pool-thanh-khoản) hiện có trên Mezo. Người dùng phê duyệt token cho router và gọi các hàm swap với tham số mong muốn. Địa chỉ trên mainnet: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Xem [Mezo Pools (dành cho nhà phát triển)](/docs/vn/docs/developers/features/mezo-pools).

## Endpoint RPC

URL mạng mà các ứng dụng dùng để giao tiếp với blockchain Mezo. Endpoint RPC hỗ trợ các phương thức JSON-RPC tiêu chuẩn của Ethereum. Có nhiều nhà cung cấp cho mainnet, gồm Boar, Imperator, Validation Cloud và dRPC. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## Nhà cung cấp RPC

Dịch vụ vận hành [endpoint RPC](#endpoint-rpc) cho mạng Mezo. Các nhà cung cấp như Boar, Imperator, Validation Cloud và dRPC đều cung cấp cả kết nối HTTPS lẫn WebSocket cho mainnet. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## Trượt giá

Chênh lệch giữa giá dự kiến của một giao dịch và giá khớp thực tế. Trượt giá (slippage) cao hơn ở các pool có ít thanh khoản hoặc với giao dịch có quy mô lớn hơn. [Pool ổn định](#pool-ổn-định) được thiết kế để giảm thiểu trượt giá cho các cặp tài sản có tương quan.

## Splitter

Hợp đồng chia lượng phát thải MEZO cho hai đích. Các tỷ lệ phân chia hiện được cố định và khóa thông qua quản trị. Xem [Chain Splitter](#chain-splitter) và [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Nguồn dự trữ MUSD đóng vai trò tuyến phòng thủ đầu tiên trước các khoản [thanh lý](#thanh-lý). Người dùng gửi MUSD vào Stability Pool và đổi lại nhận một phần tài sản thế chấp bị thanh lý. Hợp đồng [PCV](#pcv) khởi tạo pool với khoản gửi ban đầu 100 triệu MUSD. Xem [Các khái niệm chính về MUSD](/docs/vn/docs/users/borrow/concepts).

## Pool ổn định

Một [pool thanh khoản](#pool-thanh-khoản) được tối ưu hóa cho giao dịch giữa các tài sản có giá trị tương quan cao, chẳng hạn MUSD và USDC. Pool ổn định dùng một công thức chuyên biệt để mang lại mức [trượt giá](#trượt-giá) thấp hơn nhiều và thu phí giao dịch 0,02%. Xem [Phí pool](/docs/vn/docs/users/mezo-earn/pools/pools-fees).

## Gauge staking

Một [gauge](#gauge) gắn với một token staking (như LP token hoặc token biên nhận sMUSD). Người stake kiếm lượng phát thải MEZO; những người bỏ phiếu bằng veBTC cho gauge đó kiếm phí giao dịch hoặc doanh thu giao thức. Gauge staking nhận khoảng 72% lượng phát thải ròng. Xem [Thuật ngữ Mezo Earn](/docs/vn/docs/users/mezo-earn/overview/glossary).

## Subgraph

Tầng dữ liệu blockchain đã được lập chỉ mục và có thể truy vấn, truy cập qua API GraphQL. Mezo dùng Goldsky để triển khai subgraph, giúp dApp truy vấn hiệu quả các dữ liệu onchain như lượt chuyển token, hoạt động của pool và trạng thái giao thức. Xem [Triển khai subgraph](/docs/vn/docs/developers/subgraphs).

## Phí swap

Phí thu trên mỗi giao dịch swap token trong một [pool thanh khoản](#pool-thanh-khoản). Pool biến động thu 0,30% và pool ổn định thu 0,02%. Phí được thu bằng token đầu vào và được giữ trong một hợp đồng PoolFees riêng để nhà cung cấp thanh khoản nhận. Xem [Phí pool](/docs/vn/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Bitcoin wrapper phi tập trung do Thesis xây dựng và vận hành bởi [Threshold Network](#threshold-network). tBTC được bảo chứng 1:1 bằng Bitcoin gốc và là dạng mà BTC mang khi được chuyển qua cầu nối sang các mạng tương thích Ethereum. Trên Mezo, BTC được nạp sẽ đi qua hạ tầng lưu ký của tBTC. Xem [Kiến trúc MUSD](/docs/vn/docs/users/borrow/architecture-and-terminology).

## Phát thải đuôi

Tốc độ phát thải MEZO vĩnh viễn ở mức 2% mỗi năm, bắt đầu sau năm thứ 8 của [lịch halving](#lịch-halving). Phát thải đuôi (tail emissions) liên tục cung cấp khoản khuyến khích vô thời hạn cho validator, nhà cung cấp thanh khoản và những người tham gia quản trị. Xem [Lịch phát thải](/docs/vn/docs/users/mezo/emissions).

## Testnet

Mạng thử nghiệm, nơi nhà phát triển có thể triển khai và kiểm thử ứng dụng mà không dùng tài sản thật. Mezo Testnet có chain ID `31611`. Xem [Cấu hình môi trường của bạn](/docs/vn/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event (sự kiện tạo token). Thời điểm token MEZO lần đầu được tạo ra và phân phối. Phần phân bổ cho Cộng đồng và Quỹ được mở khóa tại TGE, còn phần phân bổ cho Đội ngũ và Nhà đầu tư chịu cliff 1 năm và vesting tuyến tính trong 3 năm. Xem [Phân bổ token](/docs/vn/docs/users/mezo/token-distribution).

## Threshold Network

Mạng phi tập trung vận hành cầu nối [tBTC](#tbtc). Threshold vận hành một tập hợp người ký phi tập trung, đã chuyển qua cầu nối hơn 28.000 Bitcoin kể từ đầu năm 2020. Xem [Kiến trúc MUSD](/docs/vn/docs/users/borrow/architecture-and-terminology).

## Phân bổ token

Việc phân bổ 1.000.000.000 MEZO của nguồn cung lúc khởi tạo: Cộng đồng (40%), Nhà đầu tư và đối tác (30%), Đội ngũ (20%) và Quỹ (10%). Toàn bộ quá trình vesting hoàn tất trong vòng 36 tháng kể từ [TGE](#tge). Xem [Phân bổ token](/docs/vn/docs/users/mezo/token-distribution).

## Phí giao dịch

Xem [Phí swap](#phí-swap).

## Trove

Vị thế nợ có tài sản thế chấp trên Mezo, gắn với một địa chỉ Ethereum duy nhất. Người dùng mở một trove bằng cách nạp BTC và vay [MUSD](#musd) dựa trên số BTC đó. Trong các giao thức tương tự, trove còn được gọi là "CDP". Xem [Vay và đúc MUSD](/docs/vn/docs/users/borrow/mint-musd).

## Validator

Bên vận hành node tham gia vào quá trình đồng thuận và tạo khối trên mạng Mezo. Validator chạy client mezod, bảo mật chuỗi và nhận lượng phát thải MEZO thông qua Chain Splitter. Xem [Validator của Mezo](/docs/vn/docs/developers/mezo-nodes/validators).

## Validator Kit

Bộ công cụ toàn diện để triển khai và quản lý node Mezo. Hỗ trợ Docker, daemon chạy trực tiếp (native), Kubernetes và triển khai trên đám mây. Bao gồm các mẫu cấu hình, công cụ giám sát và script tự động hóa. Xem [Hướng dẫn Validator Kit](/docs/vn/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC (BTC ký quỹ để bỏ phiếu). Một NFT đại diện cho Bitcoin đã khóa, mang lại quyền biểu quyết và quyền hưởng phí trong Mezo Earn. Trọng số phiếu bầu suy giảm tuyến tính trong suốt thời hạn khóa. Thời hạn khóa tối đa là 28 ngày. Xem [Tổng quan về veBTC](/docs/vn/docs/users/mezo-earn/lock/vebtc).

## Gauge boost veBTC

Một [gauge](#gauge) gắn với một NFT veBTC cụ thể. Người nắm giữ veMEZO bỏ phiếu cho các gauge này để cung cấp [boost](#boost) cho vị thế veBTC đó, đổi lại nhận [khoản khuyến khích](#khoản-khuyến-khích). Xem [Thị trường ghép cặp](/docs/vn/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO (MEZO ký quỹ để bỏ phiếu). Một NFT đại diện cho token MEZO đã khóa, có thể [boost](#boost) quyền biểu quyết veBTC lên tới 5x, đồng thời tự mình bỏ phiếu cho [gauge boost veBTC](#gauge-boost-vebtc) và [MEZO Gauges](#mezo-gauge). veMEZO không có trọng số quản trị riêng và không thể bỏ phiếu cho [gauge staking](#gauge-staking) nếu không có veBTC. Thời hạn khóa tối đa là 4 năm. Xem [Tổng quan về veMEZO](/docs/vn/docs/users/mezo-earn/lock/vemezo).

## Lịch vesting

Lộ trình theo đó các phần phân bổ token bị khóa dần dần được mở khóa. Toàn bộ quá trình vesting MEZO hoàn tất trong vòng 36 tháng kể từ [TGE](#tge). Phần phân bổ cho Đội ngũ và Nhà đầu tư có [cliff](#cliff) 1 năm, sau đó mở khóa tuyến tính hằng tháng trong 2 năm. Xem [Phân bổ token](/docs/vn/docs/users/mezo/token-distribution).

## Pool biến động

Một [pool thanh khoản](#pool-thanh-khoản) được thiết kế cho các cặp tài sản có giá không tương quan, chẳng hạn BTC và MUSD. Pool biến động dùng công thức tích hằng số (x * y = k) và thu [phí swap](#phí-swap) 0,30%. Xem [Phí pool](/docs/vn/docs/users/mezo-earn/pools/pools-fees).

## Trọng số phiếu bầu

Mức ảnh hưởng của một vị thế khi bỏ phiếu cho gauge. Với veBTC, trọng số được tính bằng lượng BTC đã khóa nhân với thời hạn khóa còn lại, chia cho thời hạn khóa tối đa (28 ngày). Với veMEZO, công thức tương tự được áp dụng nhưng với thời hạn khóa tối đa là 4 năm. Xem [Tổng quan về bỏ phiếu](/docs/vn/docs/users/mezo-earn/vote).

## Wormhole

Giao thức nhắn tin cross-chain vận hành [MUSD Bridge](#musd-bridge). Wormhole cho phép chuyển token an toàn giữa Mezo và Ethereum. Xem [MUSD Bridge](/docs/vn/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. Giao thức Wormhole cụ thể được dùng cho [MUSD Bridge](#musd-bridge). NTT duy trì tính có thể thay thế (fungibility) của token bằng cách khóa token trên chuỗi nguồn và đúc token trên chuỗi đích, giữ cho tổng cung không đổi trên các chuỗi. Xem [MUSD Bridge](/docs/vn/docs/users/borrow/musd-bridge).
