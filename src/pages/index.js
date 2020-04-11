import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { TITLE } from '../constants/strings';
import { Navbar } from '../components/Navbar';

const IndexPage = () => (
  <Layout>
    <SEO title={TITLE} />
    <div class="flex flex-wrap bg-gray-100 mt-8">
      <div class="w-full lg:w-1/2 p-0">
        <div className="h-full">
          <Image />
        </div>
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="text-gray-700 text-left px-8">
          <h1 className="text-3xl font-playfair py-6">
            Compassionate dermatological care in the heart of Manhattan.
          </h1>
          <p className="font-workSans py-4">
            As doctors and staff at{' '}
            <span className="font-bold">Upper West Side Dermatology</span>, we
            share a common mission: treat every patient with respect and
            compassion while delivering the best possible care.
          </p>
          <p className="font-workSans py-4">
            That means making you to feel comfortable and cared for every time
            you walk into our office. It’s listening to your concerns and
            collaborating with you to come up with the least invasive, most
            effective course of treatment. It’s also striving for long-term
            relationships, not one time visits.
          </p>
        </div>
      </div>
    </div>
    <div class="flex mt-8">
      <div class="flex-grow text-gray-800 justify-end py-2 m-2">
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
