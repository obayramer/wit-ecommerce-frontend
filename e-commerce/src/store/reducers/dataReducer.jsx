export default function dataReducer() {
    return {
      en: {
        brand: "Bandage",
  
        categories: {
          title: "Shop",
          prev: "Home",
        },
  
        clients: {
          title: "Big Companies Are Here",
          description:
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
          logos: [
            "./brands/fa-brands-1.png",
            "./brands/fa-brands-2.png",
            "./brands/fa-brands-3.png",
            "./brands/fa-brands-4.png",
            "./brands/fa-brands-5.png",
            "./brands/fa-brands-6.png",
          ],
        },
  
        contact: {
          section1: {
            subtitle: "CONTACT US",
            title: "Get in touch today!",
            description:
              "We know how large objects will act, but things on a small scale",
            numbers: {
              phone: "Phone : +451 215 215",
              fax: "Fax : +451 215 215",
            },
            img: "./contact/contact.png",
          },
          section2: {
            subtitle: "VISIT OUR OFFICE",
            title: "We help small businesses with big ideas",
            ways: [
              {
                line1: "georgia.young@example.com",
                line2: "georgia.young@ple.com",
                support: "Get Support",
                button: "Submit Request",
              },
              {
                line1: "georgia.young@example.com",
                line2: "georgia.young@ple.com",
                support: "Get Support",
                button: "Submit Request",
              },
              {
                line1: "georgia.young@example.com",
                line2: "georgia.young@ple.com",
                support: "Get Support",
                button: "Submit Request",
              },
            ],
          },
          section3: {
            subtitle: "WE CAN'T WAIT TO MEET YOU",
            title: "Let’s Talk",
            button: "Try it free now",
          },
        },
  
        features: {
          title1: "Featured Products",
          title2: "THE BEST SERVICES",
          description: "Problems trying to resolve the conflict between",
          cards: [
            {
              title: "Easy Wins",
              description: "Get your best looking smile now!",
            },
            {
              title: "Concrete",
              description:
                "Defalcate is most focused in helping you discover your most beautiful smile",
            },
            {
              title: "Hack Growth",
              description: "Overcame any hurdle or any other problem.",
            },
          ],
        },
  
        footer: {
          navcontainer: [
            {
              title: "Company Info",
              nav1: {
                title: "About Us",
                link: "",
              },
              nav2: {
                title: "Carrier",
                link: "",
              },
              nav3: {
                title: "We are hiring",
                link: "",
              },
              nav4: {
                title: "Blog",
                link: "",
              },
            },
            {
              title: "Legal",
              nav1: {
                title: "About Us",
                link: "",
              },
              nav2: {
                title: "Carrier",
                link: "",
              },
              nav3: {
                title: "We are hiring",
                link: "",
              },
              nav4: {
                title: "Blog",
                link: "",
              },
            },
            {
              title: "Features",
              nav1: {
                title: "Business Marketing",
                link: "",
              },
              nav2: {
                title: "User Analytic",
                link: "",
              },
              nav3: {
                title: "Live Chat",
                link: "",
              },
              nav4: {
                title: "Unlimited Support",
                link: "",
              },
            },
            {
              title: "Resources",
              nav1: {
                title: "IOS & Android",
                link: "",
              },
              nav2: {
                title: "Watch a Demo",
                link: "",
              },
              nav3: {
                title: "Customers",
                link: "",
              },
              nav4: {
                title: "API",
                link: "",
              },
            },
          ],
          contact: {
            title: "Get In Touch",
            placeholder: "Your Email",
            button: "Subscribe",
            caption: "Lore imp sum dolor Amit",
          },
          copyright: "Made With Love By Figmaland All Right Reserved",
        },
        login: {
          header: {
            subtitle: "Seamless Shopping Experience Awaits",
            title: "Login to Your Account",
            description:
              "Access your personalized shopping haven and enjoy a tailored experience with easy login and secure authentication.",
          },
          email: {
            label: "Email:",
            placeholder: "Email *",
            footnote: "Please enter your registered email address.",
            errorMsg: {
              required: "Email field cannot be empty.",
            },
          },
          password: {
            label: "Password:",
            placeholder: "Password *",
            footnote: "Enter your password.",
            errorMsg: {
              required: "Please enter your password.",
            },
          },
          button: "Log In",
          submission: {
            fail: "Login failed. Please try again.",
          },
        },
  
        hero: {
          header: {
            info: {
              phone: "(225) 555-0118",
              email: "michelle.rivera@example.com",
              message: "Follow Us and get a chance to win 80% off",
              socialmedia: "Follow Us:",
            },
            nav: {
              navlinks: {
                home: "Home",
                shop: "Shop",
                about: "About",
                pricing: "Pricing",
                contact: "Contact",
                team: "Team",
              },
              rightside: {
                login: "Login",
                registr: "Register",
              },
            },
            shopdropdown: {
              header1: "Women",
              header2: "Men",
            },
          },
        },

        posts: {
          title1: "Practice Advice",
          title2: "Featured Posts",
          posts: [
            {
              img: "./posts/post1.png",
              rate: "4.9",
              title1: "English Department",
              title2: "Graphic Design",
              description:
                "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
              salesno: "15 Sales",
              oldprice: "$16.48",
              newprice: "$6.48",
              colors: "./posts/product-colors.png",
              hour: "22h",
              lessons: "64 Lessons",
              progress: "Progress",
              button: "Learn More",
            },
            {
              img: "./posts/post2.png",
              rate: "4.9",
              title1: "English Department",
              title2: "Graphic Design",
              description:
                "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
              salesno: "15 Sales",
              oldprice: "$16.48",
              newprice: "$6.48",
              colors: "./posts/product-colors.png",
              hour: "22h",
              lessons: "64 Lessons",
              progress: "Progress",
              button: "Learn More",
            },
          ],
        },
  
        pricing: {
          subtitle: "PRICING",
          title: "Simple Pricing",
          history: {
            prev: "Home",
            current: "Pricing",
          },
  
          pricingplans: {
            title: "Pricing",
            description:
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
            monthly: "Monthly",
            yearly: "Yearly",
            save: "Save 25%",
            plans: [
              {
                type: "FREE",
                description: "Organize across all apps by hand",
                price: {
                  amount: "0",
                  currency: "$",
                  interval: "Per Month",
                },
                features: [
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "1GB  Cloud storage", included: false },
                  { ft: "Email and community support", included: false },
                ],
                button: "Try for free",
              },
              {
                type: "STANDARD",
                description: "Organize across all apps by hand",
                price: {
                  amount: "9.99",
                  currency: "$",
                  interval: "Per Month",
                },
                features: [
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "1GB  Cloud storage", included: false },
                  { ft: "Email and community support", included: false },
                ],
                button: "Try for free",
              },
              {
                type: "PREMIUM",
                description: "Organize across all apps by hand",
                price: {
                  amount: "19.99",
                  currency: "$",
                  interval: "Per Month",
                },
                features: [
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "Unlimited product updates", included: true },
                  { ft: "1GB  Cloud storage", included: false },
                  { ft: "Email and community support", included: false },
                ],
                button: "Try for free",
              },
            ],
          },
  
          clients: "Trusted By Over 4000 Big Companies",
          faqs: {
            title: "Pricing FAQs",
            description:
              "Problems trying to resolve the conflict between the two major realms of Classical physics",
            qas: [
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
              {
                q: "the quick fox jumps over the lazy dog",
                a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
              },
            ],
            footnote: "Haven’t got your answer? Contact our support",
          },
        },
  
        productcards: {
          title1: "Featured Products",
          title2: "BESTSELLER PRODUCTS",
          description: "Problems trying to resolve the conflict between",
          button: "LOAD MORE PRODUCTS",
        },
  
        shop: {
          showing: "Showing all ",
          results: " results",
          views: "Views:",
          p_asc: "Price (Low to High)",
          p_desc: "Price (High to Low)",
          r_asc: "Rating (Low to High)",
          r_desc: "Rating (High to Low)",
          button: "Filter",    
          pagebuttons: {
            first: "First",
            next: "Next",
          },
        },
  
        shopcards: {
          cards: [
            {
              img: "./shopcards/shopcard1.jpg",
              message: "Top Product of the Week",
              button: "EXPLORE ITEMS",
            },
            {
              img: "./shopcards/shopcard4.png",
              message: "Top Product of the Week",
              button: "EXPLORE ITEMS",
            },
            {
              img: "./shopcards/shopcard5.png",
              message: "Top Product of the Week",
              button: "EXPLORE ITEMS",
            },
          ],
        },
        signup: {
          header: {
            subtitle: "Join Our Shopping Community",
            title: "Create Your Account",
            description:
              "Sign up and become a member to unlock a world of shopping delights. Let's get started on your shopping journey!",
          },
          name: {
            label: "Name:",
            placeholder: "Name *",
            footnote: "Please type your name and surname.",
            errorMsg: {
              required: "Name field cannot be empty.",
              length: "Name must be at least 3 characters.",
            },
          },
          email: {
            label: "Email:",
            placeholder: "Email *",
            footnote: "We'll never share your email with anyone else.",
            errorMsg: {
              required: "Email field cannot be empty.",
            },
          },
          password: {
            label: "Password:",
            placeholder: "Password *",
            footnote: "Set a password.",
            errorMsg: {
              required: "Password field cannot be empty.",
              length: "Password must be at least 8 characters.",
              upper: "Password must include at least one upper case character.",
              lower: "Password must include at least one lower case character.",
              special:
                "Password must include at least one special character: !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
            },
          },
          passmatch: {
            label: "Confirm Password:",
            placeholder: "Re-enter your password *",
            footnote: "Please re-enter your password.",
            errorMsg: {
              required: "You must re-enter your password.",
              match: "Passwords must match.",
            },
          },
          role: {
            label: "Role:",
            admin: "Admin",
            store: "Store",
            customer: "Customer",
            footnote: "Choose a role from the list.",
          },
          store: {
            name: {
              label: "Store Name:",
              placeholder: "Store Name *",
              footnote: "Enter the store name.",
              errorMsg: {
                required: "Store name field cannot be empty.",
                length: "Store name must be at least 3 characters.",
              },
            },
            phone: {
              label: "Store Phone:",
              placeholder: "+90XXXXXXXXXX *",
              footnote: "Enter a valid Turkish phone number.",
              errorMsg: {
                required: "Phone field cannot be empty.",
                format: "Phone number must be in the format +90 followed by 10 digits.",
              },
            },
            taxid: {
              label: "Store Tax ID:",
              placeholder: "TXXXXVXXXXXX *",
              footnote: "Enter the store tax ID.",
              errorMsg: {
                required: "Tax ID field cannot be empty.",
                length: "Tax ID must be 12 characters (including letters).",
              },
            },
            bank: {
              label: "Store Bank Account:",
              placeholder: "Store Bank Account *",
              footnote: "Enter the IBAN adress.",
              errorMsg: {
                required: "Bank account field cannot be empty.",
                minlength:
                  "IBAN cannot be less than 26 characters, including country code.",
                maxlength:
                  "IBAN cannot be more than 26 characters, including country code.",
              },
            },
          },
          button: "Submit",
          submission: {
            success: "You need to click link in email to activate your account!",
            fail: "Something went wrong. Please try again.",
          },
        },
        team: {
          section: {
            subtitle: "WHAT WE DO",
            title: "Innovation tailored for you",
            history: {
              prev: "Home",
              current: "Team",
            },
            images: [
              "./team/erhanfirat.jpeg",
              "./team/gokhanozdemir.jpeg",
              "./team/omerbayram.png",
              "./team/engincetin.jpg",
              "./team/oguzhantako.jpg",
            ],
          },
          title: "Meet Our Team",
          description:
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
          people: [
            {
              img: "./team/erhanfirat.jpeg",
              name: "Erhan Fırat",
              department: "Project Owner",
            },
            {
              img: "./team/gokhanozdemir.jpeg",
              name: "Gökhan Özdemir",
              department: "Scrum Master",
            },
            {
              img: "./team/omerbayram.png",
              name: "Ömer Bayram",
              department: "Fullstack Developer",
            },
            {
              img: "./team/engincetin.jpeg",
              name: "Engin Çetin",
              department: "Fullstack Developer",
            },
            {
              img: "./team/alperenmimarlar.jpeg",
              name: "Alperen Mimarlar",
              department: "Fullstak Developer",
            },
            {
              img: "./team/aysenaydin.jpeg",
              name: "Ayşen Aydın",
              department: "Fullstack Developer",
            },
            {
              img: "./team/ozgekarabay.jpeg",
              name: "Özge Karabay",
              department: "Frontend Developer",
            },
            {
              img: "./team/sebnemplane.jpeg",
              name: "Şebnem Uçak",
              department: "Frontend Developer",
            },
            {
              img: "./team/oguzhantako.jpeg",
              name: "Oğuzhan Takşar",
              department: "QA Engineer",
            },
          ],
        },
  
        trial: {
          title: "Start your 14 days free trial",
          description:
            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
          button: "Try it free now",
        },
  
        vision: {
          img1: "./vision/vision1.png",
          img2: "./vision/vision2.png",
          title1: "Featured Products",
          title2: "We love what we do",
          description1:
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.",
          description2:
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
        },
      },
    };
  }