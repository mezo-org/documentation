---
title: Câu hỏi thường gặp
topic: developers
---

#### Mezo là gì? Giá trị dành cho nhà xây dựng <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo là một nền tảng tài chính Bitcoin không cần cấp phép và không cần ngân hàng, được thiết kế để biến Bitcoin từ một phương tiện lưu trữ giá trị thụ động thành một tài sản tài chính năng động, sinh lời. Sứ mệnh cốt lõi của nền tảng là giúp hơn 100 triệu người nắm giữ Bitcoin trên toàn thế giới HODL có mục đích, bằng cách tận dụng giá trị tài sản của mình mà không cần bán chúng. Điều này đạt được nhờ xây dựng một hạ tầng vững chắc, hỗ trợ các giao dịch rẻ, nhanh và an toàn cho nhiều ứng dụng thực tế.

Tầm nhìn cuối cùng của Mezo là đưa việc sử dụng Bitcoin trở nên "siêu bình thường" (supernormal) — trạng thái mà việc dùng Bitcoin cho các hoạt động tài chính hằng ngày liền mạch và gắn kết đến mức trở thành một phần hiển nhiên, không có gì đáng chú ý trong cuộc sống, giống như dùng thẻ ghi nợ.

Đối với nhà phát triển, Mezo mang lại một giá trị riêng biệt và hấp dẫn. Thesis, studio đứng sau Mezo, cũng là đơn vị tạo ra tBTC, cầu nối Bitcoin phi tập trung lớn nhất; Acre, một giao thức lợi suất Bitcoin gốc; và Fold, một ứng dụng chi tiêu cho người tiêu dùng. Bộ sản phẩm liên kết với nhau này cung cấp cho nhà phát triển một tập hợp "money lego" mạnh mẽ, đã được kiểm chứng và có khả năng tương tác cao ngay từ ngày đầu. Ngăn xếp tích hợp này giúp giảm đáng kể trở ngại trong phát triển và rủi ro hệ thống so với việc xây dựng trên các nền tảng khác, nơi những thành phần thiết yếu như cầu nối, stablecoin và nguồn lợi suất thường do các bên thứ ba rời rạc, không liên quan với nhau cung cấp. Khi xây dựng trên Mezo, nhà phát triển có thể khai thác một hệ sinh thái tài chính hoàn chỉnh, tự củng cố, được thiết kế để thúc đẩy một tầng hoạt động kinh tế mới xoay quanh tài sản an toàn và phi tập trung nhất thế giới.

#### MUSD là gì?

Trung tâm của hệ sinh thái Mezo là MUSD, stablecoin gốc của hệ sinh thái. MUSD được thiết kế để được bảo chứng 100% bằng dự trữ Bitcoin và duy trì tỷ giá neo ổn định 1:1 với đô la Mỹ. Chức năng chính của MUSD là làm phương tiện trao đổi có tính thanh khoản, vận hành nền kinh tế Mezo và giúp người dùng khai thác giá trị lượng Bitcoin họ nắm giữ. Cơ chế rất đơn giản: người dùng có thể gửi Bitcoin của mình (dưới dạng tBTC) vào một vault onchain an toàn và đúc MUSD dựa trên số Bitcoin đó. Lượng MUSD mới đúc này sau đó có thể được dùng trong toàn hệ sinh thái cho nhiều hoạt động, bao gồm chi tiêu cho hàng hóa và dịch vụ, giao dịch trên các sàn phi tập trung, cung cấp thanh khoản để kiếm lợi suất hoặc tham gia các giao thức DeFi khác.

Đối với nhà phát triển, Mezo và MUSD tạo nên một hệ sinh thái "có sẵn mọi thứ cần thiết" với các lợi thế chiến lược:

* **Giảm mạnh trở ngại nhờ các công cụ quen thuộc (EVM và RainbowKit):** Mezo tương thích EVM hoàn toàn, cho phép nhà phát triển Solidity triển khai các hợp đồng sẵn có và dùng những công cụ yêu thích như Hardhat và Foundry mà không cần học thêm gì.
* **Đưa người dùng vào liền mạch với Mezo Passport:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) giải quyết vấn đề thiếu kết nối nghiêm trọng giữa các loại ví bằng cách cho phép người dùng ký giao dịch EVM bằng ví Bitcoin gốc của họ (như Xverse hoặc Unisat). Cơ chế trừu tượng hóa tài khoản (account abstraction) này nghĩa là bạn có thể xây dựng một UX gọn gàng duy nhất để tiếp cận toàn bộ cộng đồng Bitcoin mà không phải viết logic ví tùy chỉnh phức tạp.
* [Các thành phần tài chính mạnh mẽ với MUSD:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) là một khối xây dựng mạnh mẽ. Lãi suất cố định, thấp và LTV cao (lên đến 90%) của MUSD là công nghệ nền tảng cho các sản phẩm tài chính có thể dự đoán được (ví dụ: khoản vay kỳ hạn cố định).

#### Nền kinh tế Bitcoin tuần hoàn là gì?

Nền kinh tế Bitcoin tuần hoàn là một hệ thống tự duy trì, trong đó Bitcoin được dùng cả để kiếm tiền lẫn chi tiêu mà không cần chuyển đổi sang tiền pháp định. Hệ thống này tạo ra một vòng khép kín, nơi các cá nhân và doanh nghiệp giao dịch trực tiếp bằng BTC cho tiền lương, hàng hóa và dịch vụ.

Sự kết hợp giữa Mezo và MUSD tạo ra một vòng lặp kinh tế tự củng cố:

1. **Mở khóa:** Người nắm giữ Bitcoin nạp BTC và đúc MUSD, kích hoạt nguồn vốn của mình mà không phải bán tài sản cốt lõi.
2. **Giao dịch:** Họ dùng số MUSD này cho mọi việc, từ giao dịch, cho vay đến thanh toán hằng ngày.
3. **Củng cố:** Hoạt động onchain này tạo ra phí giao dịch (trả bằng BTC), giúp bảo mật mạng và củng cố vai trò của Bitcoin vừa là tài sản dùng để giao dịch, vừa là phương tiện lưu trữ giá trị.

Mezo cung cấp đường ray, còn MUSD cung cấp nhiên liệu, mang đến cho nhà phát triển một nền tảng độc đáo để tạo ra các ứng dụng mang lại giá trị thực cho thị trường Bitcoiner rộng lớn nhưng chưa được phục vụ đầy đủ.

#### Kiến trúc của chuỗi Mezo là gì?

Chuỗi Mezo được thiết kế với kiến trúc lai nhằm tối đa hóa cả khả năng tiếp cận cho nhà phát triển lẫn hiệu năng mạng. Đây là một blockchain tương thích EVM hoàn toàn, được xây dựng bằng Cosmos SDK và chạy trên engine đồng thuận CometBFT. Mã nguồn là một bản fork của Evmos đã được sửa đổi nhiều.

Ngăn xếp công nghệ này mang lại sự kết hợp mạnh mẽ giữa các tính năng:

* **Tương thích EVM**: Cho phép cộng đồng đông đảo các nhà phát triển Ethereum và Solidity trên toàn cầu triển khai các hợp đồng thông minh và ứng dụng phi tập trung (dApp) sẵn có lên Mezo mà gần như không cần thay đổi mã. Họ có thể tiếp tục dùng những bộ công cụ quen thuộc và hoàn thiện, bao gồm MetaMask, Hardhat, Remix và Foundry, giúp hạ thấp đáng kể rào cản để xây dựng trong hệ sinh thái Bitcoin.
* **Cosmos SDK**: Việc xây dựng trên Cosmos SDK mang lại cho Mezo chủ quyền chuỗi, cho phép tùy chỉnh logic và cơ chế quản trị của mình.

#### Token nào được dùng để trả phí gas trên Mezo? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC (về mặt kỹ thuật là [thông qua tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)).

#### Làm thế nào để nhận BTC testnet cho Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Nhận tiền testnet qua faucet của Mezo: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Làm thế nào để tích hợp Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) là thư viện kết nối ví chính thức, được xây dựng chuyên biệt để mang lại trải nghiệm người dùng liền mạch và thống nhất trên mạng Mezo. Thư viện này xử lý những phức tạp khi kết nối cả ví Bitcoin gốc (như Xverse và Unisat) lẫn ví EVM tiêu chuẩn (như MetaMask) với dApp của bạn. Để có hướng dẫn tích hợp mới nhất và chi tiết nhất, bao gồm hướng dẫn cài đặt, cấu hình, các hook có sẵn và ví dụ mã, nhà phát triển nên tham khảo [**Tài liệu chính thức của Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### Làm thế nào để nhận tài trợ và hỗ trợ cho dự án của tôi? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**Supernormal Foundation**

​[Supernormal Foundation](https://www.supernormal.foundation/) là tổ chức chuyên trách xây dựng, quản trị và phát triển mạng Mezo cùng nền kinh tế MUSD. Tổ chức hoạt động theo tinh thần do cộng đồng dẫn dắt và là nguồn hỗ trợ chính thức chủ yếu dành cho các nhà xây dựng.

**Mezo Founder Program**

​[Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) là chương trình chủ lực dành cho các nhà phát triển và dự án ở giai đoạn đầu (MVP phải đang chạy trên testnet) muốn xây dựng trên Mezo và tích hợp MUSD. Chương trình được thiết kế để thúc đẩy đổi mới trong lĩnh vực BitcoinFi.

* **Quyền lợi:** Các nhóm đủ điều kiện được ưu tiên tiếp cận một bộ tài nguyên toàn diện, bao gồm:
  * **Tài trợ (grant):** Hỗ trợ tài chính để đẩy nhanh quá trình phát triển.
  * **Đồng tiếp thị:** Các hoạt động tiếp thị phối hợp để tăng mức độ nhận diện của dự án.
  * **Kết nối:** Kết nối với các nhà xây dựng và những người dẫn dắt khác trong hệ sinh thái.
  * **Hỗ trợ tích hợp trực tiếp:** Hỗ trợ kỹ thuật trực tiếp để đảm bảo việc triển khai trên Mezo diễn ra suôn sẻ.

​[**Đăng ký ngay**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Đối với những dự án đã trưởng thành hơn hoặc có kế hoạch tăng trưởng tham vọng, Supernormal Foundation hợp tác với các quỹ đầu tư mạo hiểm hàng đầu **Boost VC, Draper Associates và Thesis** để triển khai một chương trình tăng tốc chuyên biệt. Chương trình chuyên sâu này cung cấp khoản đầu tư ban đầu và hỗ trợ phù hợp với từng nhóm, bao gồm cố vấn chuyên sâu về chiến lược sản phẩm và triển khai đưa sản phẩm ra thị trường, giúp các nhóm đi từ một sản phẩm hoạt động được đến một doanh nghiệp có khả năng mở rộng.

#### Tôi có thể tìm hỗ trợ từ cộng đồng và đặt câu hỏi kỹ thuật ở đâu? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

Trung tâm cho mọi tương tác của cộng đồng và nhà phát triển trong hệ sinh thái Mezo là [máy chủ Discord chính thức.](https://discord.com/invite/mezo)​

#### Đối tác của Mezo là ai và làm thế nào để tích hợp với họ? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Xem danh sách cập nhật tại [Tích hợp và đối tác](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
