// pages/terms.tsx

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <section className='bg-customText2'>
        <Navbar />
      <Head>
        <title>الشروط والأحكام</title>
        <meta name="description" content="الشروط والأحكام لشركة هاي فايف العقارية" />
      </Head>
      <div className="container mx-auto p-4 md:p-8">
        <section className="terms-content">
          <h1 className="mt-40 text-3xl md:text-4xl font-bold text-center text-customBg mb-6 custom-font text-customText@">
            الشروط والأحكام
          </h1>

          <p className="text-lg text-center text-black mb-8 custom-font2">
            مرحبًا بكم في موقعنا. من خلال الاستمرار في تصفح واستخدام هذا الموقع، فإنك توافق على الامتثال للشروط والأحكام التالية.
          </p>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">إخلاء المسؤولية عن المدفوعات</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              وفقًا لتعليمات دائرة الأراضي في دبي، يُحظر على وكلاء العقارات الأفراد استلام أي مبالغ نقدية أو تحويلات مالية إلى حساباتهم المصرفية الشخصية. يجب تسليم المدفوعات النقدية فقط إلى فريق المالية لشركة العقارات أو موظفي تقدم المبيعات في مكتب الوكالة العقارية. يمكن أيضًا تسليم المدفوعات النقدية في مكاتب الأمناء الرسميين في الإمارات العربية المتحدة بحضور موظفي تقدم المبيعات الرسميين للوكالة العقارية أو تحويلها إلى الحساب المصرفي الرسمي لشركة العقارات. تؤكد شركة فام للوساطة العقارية ذ.م.م أن المدفوعات تتم فقط من خلال الإيصالات التي تم إنشاؤها إلكترونيًا عبر بريدنا الرسمي: hello@hi5properties.com. للحصول على أي مساعدة أو توضيح، يرجى الاتصال بـ: info@hi5properties.com
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">الشروط العامة</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              من خلال الوصول إلى الموقع والحصول على الخدمات أو المنتجات أو التسهيلات التي يتم تقديمها من خلال الموقع، فإنك توافق على أن جميع القوانين المعمول بها في دبي ودولة الإمارات العربية المتحدة ستنظم هذا الوصول وتوفير هذه الخدمات والمنتجات، وتوافق على الخضوع للاختصاص القضائي الحصري لمحاكم إمارة دبي، الإمارات العربية المتحدة.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">القانونية والمسؤولية</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              إلى أقصى حد يسمح به القانون المعمول به والمتطلبات التنظيمية، فإن شركة هاي فايف العقارية تخلي مسؤوليتها عن أي أخطاء أو معلومات غير دقيقة أو سهو في هذا الموقع وعن أي خسارة (سواء كانت مباشرة أو غير مباشرة) أو ضرر ناتج عن استخدامه، سواء كان ناتجًا عن إهمال أو غير ذلك. الزوار مسؤولون عن الامتثال لجميع القوانين والأنظمة المحلية.
            </p>
            <ul className="list-disc ml-6 text-base text-black custom-font2">
              <li>استخدامك لهذا الموقع وأي نزاع ينشأ عن هذا الاستخدام يخضع لقوانين دولة الإمارات العربية المتحدة.</li>
              <li>فشلنا في الإصرار على تطبيق أي بند من هذه الشروط والأحكام لن يشكل تنازلًا عن أي حكم أو حق. أي إجراء قانوني أو دعوى بيننا وبينك تتعلق بهذه الشروط والأحكام سيتم رفعها حصريًا أمام محكمة مختصة في دبي، الإمارات العربية المتحدة.</li>
            </ul>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">تحديد المسؤولية</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              في أي حال من الأحوال، لن تكون شركة هاي فايف العقارية مسؤولة عن أي أضرار، بما في ذلك على سبيل المثال لا الحصر الأضرار المباشرة أو غير المباشرة، الخاصة أو العرضية أو التبعية، الخسائر أو النفقات الناتجة عن الاتصال بالموقع أو استخدامه أو عدم القدرة على استخدامه من قبل أي طرف، أو الاعتماد على محتويات الموقع، أو في اتصال مع أي فشل في الأداء أو خطأ أو إغفال أو انقطاع أو عيب أو تأخير أو فشل في التشغيل أو النقل، فيروس الكمبيوتر أو عطل في النظام أو الخط، حتى لو تم إخطار شركة هاي فايف العقارية، ممثليها، بإمكانية حدوث مثل هذه الأضرار أو الخسائر أو النفقات.
            </p>
            <p className="text-base text-black leading-relaxed custom-font2">
              الروابط إلى موارد الإنترنت الأخرى هي على مسؤوليتك الخاصة؛ فالمحتوى والدقة والآراء المعبر عنها والروابط الأخرى التي تقدمها هذه الموارد لم يتم التحقيق فيها أو التحقق منها أو مراقبتها أو تأييدها من قبل شركة هاي فايف العقارية. سيسري هذا البند إلى أقصى حد يسمح به القانون المعمول به.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">الملكية الفكرية</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              جميع المعلومات المقدمة إلى شركة هاي فايف العقارية عبر الموقع تُعتبر وتظل ملكًا لشركة هاي فايف العقارية التي يحق لها استخدامها لأي غرض من الأغراض، بما في ذلك الأفكار والمفاهيم والمعرفة والتقنيات التي تحتوي عليها المعلومات التي يقدمها الزوار إلى الموقع. لا تُلتزم شركة هاي فايف العقارية بأي التزامات سرية أو خاصة بشأن المعلومات المقدمة إلا كما هو موضح في سياسة الخصوصية الخاصة بها أو كما هو متفق عليه أو مطلوب بموجب القانون.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">الروابط لطرف ثالث</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              من حين لآخر، قد يتضمن هذا الموقع أيضًا روابط لمواقع أخرى. يتم توفير هذه الروابط لراحتك بهدف توفير المزيد من المعلومات. إنها لا تعني أن الموقع يؤيد الموقع الآخر. نحن غير مسؤولين عن محتوى الموقع المرتبط.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">البيانات المستقبلية</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              يتضمن هذا الموقع بيانات قد تُعتبر بيانات مستقبلية. يمكن التعرف على هذه البيانات المستقبلية من خلال استخدام المصطلحات المستقبلية، مثل يعتقد، يقدر، يتوقع، ينوي، قد، سوف أو يجب أو في كل حالة من الحالات، مع الاستخدام السلبي أو أي تغييرات أخرى أو مصطلحات مشابهة. تتضمن هذه البيانات المستقبلية جميع الأمور التي ليست حقائق تاريخية. قد تظهر في العديد من الأماكن عبر هذا الموقع وتشتمل على بيانات تتعلق بنوايا وآراء أو توقعات شركة هاي فايف العقارية حول الأداء الاستثماري، نتائج العمليات، الوضع المالي، السيولة وآفاق شركة هاي فايف العقارية. بطبيعتها، تنطوي البيانات المستقبلية على مخاطر وعدم اليقين لأنها تتعلق بالأحداث وتعتمد على الظروف التي قد تحدث أو لا تحدث في المستقبل. البيانات المستقبلية ليست ضمانات للأداء المستقبلي. قد يختلف الأداء الفعلي للاستثمار، نتائج العمليات، العائد على الاستثمارات، إتمام المشاريع أو تطويرها عن الانطباع الذي تخلقه البيانات المستقبلية في هذا الموقع.
            </p>
            <p className="text-base text-black leading-relaxed custom-font2">
              لا تتعهد شركة هاي فايف العقارية بتحديث أي من هذه البيانات المستقبلية.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">حقوق الطبع والنشر والعلامات التجارية</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              ما لم يتم التنويه بخلاف ذلك، فإن جميع المحتويات المدرجة في هذا الموقع أو التطبيق المحمول، بما في ذلك، على سبيل المثال لا الحصر، الصور، الشعارات، المقالات والمواد الأخرى، محمية بحقوق الطبع والنشر، و/أو ملكية فكرية أخرى مملوكة أو خاضعة للرقابة أو مرخصة من قبل شركة هاي فايف العقارية. جميع العلامات التجارية والشعارات المعروضة على هذا الموقع هي ملك لأصحابها المعنيين، الذين قد يكونون أو لا يكونون مرتبطين بشركة هاي فايف العقارية. الزوار مسؤولون عن الامتثال لجميع القوانين المعمول بها بشأن حقوق الطبع والنشر والعلامات التجارية وغيرها من القوانين المعمول بها. نسمح للزوار بنسخ محتويات الموقع كما يلزم خلال تصفحهم للموقع. يمكن للزوار طباعة ما يلزم لاستخدامهم الشخصي فقط. جميع الاستخدامات الأخرى محظورة.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">الاتصال</h2>
            <p className="text-base text-black leading-relaxed custom-font2">
              إذا كانت لديك أي اعتراضات على المحتوى المنشور على هذا الموقع، يُطلب منك كتابة بريد إلكتروني إلى info@hi5properties.com مع الموضوع: طلب توضيح المحتوى مع ذكر اسمك وعنوانك ورقم هاتفك/موبايلك، وسنرد عليك في أقرب وقت ممكن.
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default TermsAndConditions;
