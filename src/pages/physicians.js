import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Our Physicians" />
    <div className="my-8 mx-16 font-workSans">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="max-w-xs rounded overflow-hidden bg-lightGray my-2">
          <div className="profileImage">
            <img
              class="w-full"
              src="https://upperwestsidedermatology.com/wp-content/themes/uwsd/images/dr-travis.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">Dr. Lisa Travis</div>
            <p class="text-grey-darker text-base mb-4 fade">
              Dr. Travis is an active member of professional societies including
              The American Academy of Dermatology and the American Society for
              Dermatologic Surgery. Dr. Travis’ philosophy is to embrace
              lifelong learning. “I initially decided to pursue medicine because
              I love science and health and get excited about learning new
              things in the field,” she says.
            </p>
            <button class="bg-darkPurple text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 my-2">
              Read more
            </button>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden bg-lightGray my-2">
          <div className="profileImage">
            <img
              class="w-full object-contain"
              src="https://upperwestsidedermatology.com/wp-content/uploads/2014/06/Jack-767x1024.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">Dr. Jack Cossman </div>
            <p class="text-grey-darker text-base mb-4 fade">
              Dr. Cossman is a board-certified dermatologist who practices
              medical, cosmetic, and surgical dermatology. As a member of the
              American Academy of Dermatology, Dr. Cossman loves all aspects of
              the specialty and welcomes patients of all ages and genders.
            </p>
            <button class="bg-darkPurple text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 my-2">
              Read more
            </button>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden bg-lightGray my-2">
          <div className="profileImage">
            <img
              class="w-full object-contain"
              src="https://upperwestsidedermatology.com/wp-content/themes/uwsd/images/dr-donnelley.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">Dr. Naomi Donnelley</div>
            <p class="text-grey-darker text-base mb-4 fade">
              Dr. Donnelley prides herself on her meticulous care and positive
              relationships with her patients. She is comfortable with both
              basic dermatological conditions like acne and warts, and also with
              more complicated medical dermatological conditions
            </p>
            <button class="bg-darkPurple text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 my-2">
              Read more
            </button>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            class="w-full"
            src="https://upperwestsidedermatology.com/wp-content/uploads/2014/06/DR-ASRANI-PIC.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">Dr. Falguni Asrani</div>
            <p class="text-grey-darker text-base fade">
              Dr. Asrani is a board certified dermatologist and a Fellow of the
              American Academy of Dermatology and she has held various academic
              positions, including assistant medical officer, consultant,
              clinical instructor, and honorary visiting consultant. Dr. Asrani
              was awarded “Best Teacher Award” in dermatology in New York
              Methodist Hospital 2016 and a “Certificate of Excellence” in
              Woodhull Medical Hospital, Brooklyn NY 2018.
            </p>
            <p class="text-sm text-gray-600 flex items-center mt-4 mb-2">
              Read more
            </p>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            class="w-full"
            src="https://upperwestsidedermatology.com/wp-content/themes/uwsd/images/dr-fox.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">Shelley Fox, DNP, FNP-BC</div>
            <p class="text-grey-darker text-base fade">
              Shelley Fox is a board certified Nurse Practitioner with her
              Doctorate of Nursing Practice, who specializes in all areas of
              adult and pediatric medical dermatology, cosmetic dermatology and
              laser surgery. She has dual bachelor’s degrees from the University
              of Florida in nursing and in exercise and sport sciences, where
              she graduated Cum Laude.
            </p>
            <p class="text-sm text-gray-600 flex items-center mt-4 mb-2">
              Read more
            </p>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            class="w-full"
            src="https://upperwestsidedermatology.com/wp-content/themes/uwsd/images/debbie-arteaga.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-darkPurple">
              Debbie Arteaga, Aesthetician
            </div>
            <p class="text-grey-darker text-base fade">
              Debbie Arteaga is a talented medical and cosmetic Aesthetician
              working closely with New York dermatologists and plastic surgeons.
              She is licensed to practice in New York and New Jersey and has
              been providing high-quality care for patients since 2000.
            </p>
            <p class="text-sm text-gray-600 flex items-center mt-4 mb-2">
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
