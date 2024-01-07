import {FC} from 'react'

const DashboardPage: FC = () => (
  <>
    <MainPage />
  </>
)

const MainPage = () => {
  return (
  <>
  {/*begin::Main*/}
  <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
    {/*begin::Content wrapper*/}
    <div className="d-flex flex-column flex-column-fluid">
      {/*begin::Toolbar*/}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        {/*begin::Toolbar container*/}
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            {/*begin::Title*/}
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              POS System
            </h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">
                <a href="index.html" className="text-muted text-hover-primary">
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px" />
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">Dashboards</li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            {/*begin::Secondary button*/}
            <a
              href="#"
              className="btn btn-sm fw-bold btn-secondary"
            >
              Recent Orders
            </a>
            {/*end::Secondary button*/}
            {/*begin::Primary button*/}
            <a
              href="#"
              className="btn btn-sm fw-bold btn-primary"
            >
              New Product
            </a>
            {/*end::Primary button*/}
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Toolbar container*/}
      </div>
      {/*end::Toolbar*/}
      {/*begin::Content*/}
      <div id="kt_app_content" className="app-content flex-column-fluid">
        {/*begin::Content container*/}
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          {/*begin::Layout*/}
          <div className="d-flex flex-column flex-xl-row">
            {/*begin::Content*/}
            <div className="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
              {/*begin::Pos food*/}
              <div className="card card-flush card-p-0 bg-transparent border-0">
                {/*begin::Body*/}
                <div className="card-body">
                  {/*begin::Nav*/}
                  <ul className="nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6">
                    {/*begin::Item*/}
                    <li className="nav-item mb-3 me-0">
                      {/*begin::Nav link*/}
                      <a
                        className="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active"
                        data-bs-toggle="pill"
                        href="#kt_pos_food_content_1"
                        style={{ width: 138, height: 180 }}
                      >
                        {/*begin::Icon*/}
                        <div className="nav-icon mb-3">
                          {/*begin::Food icon*/}
                          <img
                            src="media/svg/food-icons/spaghetti.svg"
                            className="w-50px"
                            alt=""
                          />
                          {/*end::Food icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="">
                          <span className="text-gray-800 fw-bold fs-2 d-block">
                            Lunch
                          </span>
                          <span className="text-gray-500 fw-semibold fs-7">
                            8 Options
                          </span>
                        </div>
                        {/*end::Info*/}
                      </a>
                      {/*end::Nav link*/}
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="nav-item mb-3 me-0">
                      {/*begin::Nav link*/}
                      <a
                        className="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg"
                        data-bs-toggle="pill"
                        href="#kt_pos_food_content_2"
                        style={{ width: 138, height: 180 }}
                      >
                        {/*begin::Icon*/}
                        <div className="nav-icon mb-3">
                          {/*begin::Food icon*/}
                          <img
                            src="media/svg/food-icons/salad.svg"
                            className="w-50px"
                            alt=""
                          />
                          {/*end::Food icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="">
                          <span className="text-gray-800 fw-bold fs-2 d-block">
                            Salad
                          </span>
                          <span className="text-gray-500 fw-semibold fs-7">
                            14 Salads
                          </span>
                        </div>
                        {/*end::Info*/}
                      </a>
                      {/*end::Nav link*/}
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="nav-item mb-3 me-0">
                      {/*begin::Nav link*/}
                      <a
                        className="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg"
                        data-bs-toggle="pill"
                        href="#kt_pos_food_content_3"
                        style={{ width: 138, height: 180 }}
                      >
                        {/*begin::Icon*/}
                        <div className="nav-icon mb-3">
                          {/*begin::Food icon*/}
                          <img
                            src="media/svg/food-icons/cheeseburger.svg"
                            className="w-50px"
                            alt=""
                          />
                          {/*end::Food icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="">
                          <span className="text-gray-800 fw-bold fs-2 d-block">
                            Burger
                          </span>
                          <span className="text-gray-500 fw-semibold fs-7">
                            5 Burgers
                          </span>
                        </div>
                        {/*end::Info*/}
                      </a>
                      {/*end::Nav link*/}
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="nav-item mb-3 me-0">
                      {/*begin::Nav link*/}
                      <a
                        className="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg"
                        data-bs-toggle="pill"
                        href="#kt_pos_food_content_4"
                        style={{ width: 138, height: 180 }}
                      >
                        {/*begin::Icon*/}
                        <div className="nav-icon mb-3">
                          {/*begin::Food icon*/}
                          <img
                            src="media/svg/food-icons/coffee.svg"
                            className="w-50px"
                            alt=""
                          />
                          {/*end::Food icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="">
                          <span className="text-gray-800 fw-bold fs-2 d-block">
                            Coffee
                          </span>
                          <span className="text-gray-500 fw-semibold fs-7">
                            7 Beverages
                          </span>
                        </div>
                        {/*end::Info*/}
                      </a>
                      {/*end::Nav link*/}
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="nav-item mb-3 me-0">
                      {/*begin::Nav link*/}
                      <a
                        className="nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg"
                        data-bs-toggle="pill"
                        href="#kt_pos_food_content_5"
                        style={{ width: 138, height: 180 }}
                      >
                        {/*begin::Icon*/}
                        <div className="nav-icon mb-3">
                          {/*begin::Food icon*/}
                          <img
                            src="media/svg/food-icons/cheesecake.svg"
                            className="w-50px"
                            alt=""
                          />
                          {/*end::Food icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="">
                          <span className="text-gray-800 fw-bold fs-2 d-block">
                            Dessert
                          </span>
                          <span className="text-gray-500 fw-semibold fs-7">
                            8 Desserts
                          </span>
                        </div>
                        {/*end::Info*/}
                      </a>
                      {/*end::Nav link*/}
                    </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Nav*/}
                  {/*begin::Tab Content*/}
                  <div className="tab-content">
                    {/*begin::Tap pane*/}
                    <div
                      className="tab-pane fade show active"
                      id="kt_pos_food_content_1"
                    >
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-2.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  T-Bone Stake
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $16.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-7.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chef’s Salmon
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $12.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-8.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Ramen
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $14.90$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-4.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chicken Breast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $9.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-10.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Tenderlion Steak
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $19.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-9.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Soup of the Day
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $7.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-5.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Breakfast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $8.20$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-11.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Sweety
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $11.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tap pane*/}
                    {/*begin::Tap pane*/}
                    <div className="tab-pane fade" id="kt_pos_food_content_2">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-11.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Sweety
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $11.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-5.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Breakfast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $8.20$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-4.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chicken Breast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $9.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-8.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Ramen
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $14.90$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-10.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Tenderlion Steak
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $19.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-9.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Soup of the Day
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $7.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-7.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chef’s Salmon
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $12.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-2.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  T-Bone Stake
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $16.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tap pane*/}
                    {/*begin::Tap pane*/}
                    <div className="tab-pane fade" id="kt_pos_food_content_3">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-5.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Breakfast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $8.20$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-11.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Sweety
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $11.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-2.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  T-Bone Stake
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $16.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-7.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chef’s Salmon
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $12.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-4.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chicken Breast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $9.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-8.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Ramen
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $14.90$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-9.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Soup of the Day
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $7.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-10.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Tenderlion Steak
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $19.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tap pane*/}
                    {/*begin::Tap pane*/}
                    <div className="tab-pane fade" id="kt_pos_food_content_4">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-5.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Breakfast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $8.20$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-4.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chicken Breast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $9.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-8.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Ramen
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $14.90$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-9.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Soup of the Day
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $7.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-11.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Sweety
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $11.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-7.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chef’s Salmon
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $12.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-10.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Tenderlion Steak
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $19.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tap pane*/}
                    {/*begin::Tap pane*/}
                    <div className="tab-pane fade" id="kt_pos_food_content_5">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-10.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Tenderlion Steak
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $19.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-5.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Breakfast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $8.20$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-4.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chicken Breast
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $9.00$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-3.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Pancakes
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $6.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-2.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  T-Bone Stake
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $16.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-7.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Chef’s Salmon
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $12.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-8.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Ramen
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $14.90$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-9.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Soup of the Day
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $7.50$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                        {/*begin::Card*/}
                        <div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
                          {/*begin::Body*/}
                          <div className="card-body text-center">
                            {/*begin::Food img*/}
                            <img
                              src="media/stock/food/img-11.jpg"
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                            />
                            {/*end::Food img*/}
                            {/*begin::Info*/}
                            <div className="mb-2">
                              {/*begin::Title*/}
                              <div className="text-center">
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                  Sweety
                                </span>
                                <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                  16 mins to cook
                                </span>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Total*/}
                            <span className="text-success text-end fw-bold fs-1">
                              $11.40$
                            </span>
                            {/*end::Total*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tap pane*/}
                  </div>
                  {/*end::Tab Content*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Pos food*/}
            </div>
            {/*end::Content*/}
            {/*begin::Sidebar*/}
            <div className="flex-row-auto w-xl-450px">
              {/*begin::Pos order*/}
              <div className="card card-flush bg-body" id="kt_pos_form">
                {/*begin::Header*/}
                <div className="card-header pt-5">
                  <h3 className="card-title fw-bold text-gray-800 fs-2qx">
                    Current Order
                  </h3>
                  {/*begin::Toolbar*/}
                  <div className="card-toolbar">
                    <a
                      href="#"
                      className="btn btn-light-primary fs-4 fw-bold py-4"
                    >
                      Clear All
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div className="card-body pt-0">
                  {/*begin::Table container*/}
                  <div className="table-responsive mb-8">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-175px" />
                          <th className="w-125px" />
                          <th className="w-60px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr
                          data-kt-pos-element="item"
                          data-kt-pos-item-price={33}
                        >
                          <td className="pe-0">
                            <div className="d-flex align-items-center">
                              <img
                                src="media/stock/food/img-2.jpg"
                                className="w-50px h-50px rounded-3 me-3"
                                alt=""
                              />
                              <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                                T-Bone Stake
                              </span>
                            </div>
                          </td>
                          <td className="pe-0">
                            {/*begin::Dialer*/}
                            <div
                              className="position-relative d-flex align-items-center"
                              data-kt-dialer="true"
                              data-kt-dialer-min={1}
                              data-kt-dialer-max={10}
                              data-kt-dialer-step={1}
                              data-kt-dialer-decimals={0}
                            >
                              {/*begin::Decrease control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="decrease"
                              >
                                <i className="ki-duotone ki-minus fs-3x" />
                              </button>
                              {/*end::Decrease control*/}
                              {/*begin::Input control*/}
                              <input
                                type="text"
                                className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                                data-kt-dialer-control="input"
                                placeholder="Amount"
                                name="manageBudget"
                                readOnly={true}
                                defaultValue={2}
                              />
                              {/*end::Input control*/}
                              {/*begin::Increase control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="increase"
                              >
                                <i className="ki-duotone ki-plus fs-3x" />
                              </button>
                              {/*end::Increase control*/}
                            </div>
                            {/*end::Dialer*/}
                          </td>
                          <td className="text-end">
                            <span
                              className="fw-bold text-primary fs-2"
                              data-kt-pos-element="item-total"
                            >
                              $66.00
                            </span>
                          </td>
                        </tr>
                        <tr
                          data-kt-pos-element="item"
                          data-kt-pos-item-price="7.5"
                        >
                          <td className="pe-0">
                            <div className="d-flex align-items-center">
                              <img
                                src="media/stock/food/img-9.jpg"
                                className="w-50px h-50px rounded-3 me-3"
                                alt=""
                              />
                              <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                                Soup of the Day
                              </span>
                            </div>
                          </td>
                          <td className="pe-0">
                            {/*begin::Dialer*/}
                            <div
                              className="position-relative d-flex align-items-center"
                              data-kt-dialer="true"
                              data-kt-dialer-min={1}
                              data-kt-dialer-max={10}
                              data-kt-dialer-step={1}
                              data-kt-dialer-decimals={0}
                            >
                              {/*begin::Decrease control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="decrease"
                              >
                                <i className="ki-duotone ki-minus fs-3x" />
                              </button>
                              {/*end::Decrease control*/}
                              {/*begin::Input control*/}
                              <input
                                type="text"
                                className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                                data-kt-dialer-control="input"
                                placeholder="Amount"
                                name="manageBudget"
                                readOnly={true}
                                defaultValue={1}
                              />
                              {/*end::Input control*/}
                              {/*begin::Increase control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="increase"
                              >
                                <i className="ki-duotone ki-plus fs-3x" />
                              </button>
                              {/*end::Increase control*/}
                            </div>
                            {/*end::Dialer*/}
                          </td>
                          <td className="text-end">
                            <span
                              className="fw-bold text-primary fs-2"
                              data-kt-pos-element="item-total"
                            >
                              $7.50
                            </span>
                          </td>
                        </tr>
                        <tr
                          data-kt-pos-element="item"
                          data-kt-pos-item-price="13.5"
                        >
                          <td className="pe-0">
                            <div className="d-flex align-items-center">
                              <img
                                src="media/stock/food/img-3.jpg"
                                className="w-50px h-50px rounded-3 me-3"
                                alt=""
                              />
                              <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                                Pancakes
                              </span>
                            </div>
                          </td>
                          <td className="pe-0">
                            {/*begin::Dialer*/}
                            <div
                              className="position-relative d-flex align-items-center"
                              data-kt-dialer="true"
                              data-kt-dialer-min={1}
                              data-kt-dialer-max={10}
                              data-kt-dialer-step={1}
                              data-kt-dialer-decimals={0}
                            >
                              {/*begin::Decrease control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="decrease"
                              >
                                <i className="ki-duotone ki-minus fs-3x" />
                              </button>
                              {/*end::Decrease control*/}
                              {/*begin::Input control*/}
                              <input
                                type="text"
                                className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                                data-kt-dialer-control="input"
                                placeholder="Amount"
                                name="manageBudget"
                                readOnly={true}
                                defaultValue={2}
                              />
                              {/*end::Input control*/}
                              {/*begin::Increase control*/}
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="increase"
                              >
                                <i className="ki-duotone ki-plus fs-3x" />
                              </button>
                              {/*end::Increase control*/}
                            </div>
                            {/*end::Dialer*/}
                          </td>
                          <td className="text-end">
                            <span
                              className="fw-bold text-primary fs-2"
                              data-kt-pos-element="item-total"
                            >
                              $27.00
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                  {/*begin::Summary*/}
                  <div className="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
                    {/*begin::Content*/}
                    <div className="fs-6 fw-bold text-white">
                      <span className="d-block lh-1 mb-2">Subtotal</span>
                      <span className="d-block mb-2">Discounts</span>
                      <span className="d-block mb-9">Tax(12%)</span>
                      <span className="d-block fs-2qx lh-1">Total</span>
                    </div>
                    {/*end::Content*/}
                    {/*begin::Content*/}
                    <div className="fs-6 fw-bold text-white text-end">
                      <span
                        className="d-block lh-1 mb-2"
                        data-kt-pos-element="total"
                      >
                        $100.50
                      </span>
                      <span
                        className="d-block mb-2"
                        data-kt-pos-element="discount"
                      >
                        -$8.00
                      </span>
                      <span className="d-block mb-9" data-kt-pos-element="tax">
                        $11.20
                      </span>
                      <span
                        className="d-block fs-2qx lh-1"
                        data-kt-pos-element="grant-total"
                      >
                        $93.46
                      </span>
                    </div>
                    {/*end::Content*/}
                  </div>
                  {/*end::Summary*/}
                  {/*begin::Payment Method*/}
                  <div className="m-0">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-800 mb-5">
                      Payment Method
                    </h1>
                    {/*end::Title*/}
                    {/*begin::Radio group*/}
                    <div
                      className="d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12"
                      data-kt-buttons="true"
                      data-kt-buttons-target="[data-kt-button]"
                    >
                      {/*begin::Radio*/}
                      <label
                        className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4"
                        data-kt-button="true"
                      >
                        {/*begin::Input*/}
                        <input
                          className="btn-check"
                          type="radio"
                          name="method"
                          defaultValue={0}
                        />
                        {/*end::Input*/}
                        {/*begin::Icon*/}
                        <i className="ki-duotone ki-dollar fs-2hx mb-2 pe-0">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                        {/*end::Icon*/}
                        {/*begin::Title*/}
                        <span className="fs-7 fw-bold d-block">Cash</span>
                        {/*end::Title*/}
                      </label>
                      {/*end::Radio*/}
                      {/*begin::Radio*/}
                      <label
                        className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active"
                        data-kt-button="true"
                      >
                        {/*begin::Input*/}
                        <input
                          className="btn-check"
                          type="radio"
                          name="method"
                          defaultValue={1}
                        />
                        {/*end::Input*/}
                        {/*begin::Icon*/}
                        <i className="ki-duotone ki-credit-cart fs-2hx mb-2 pe-0">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        {/*end::Icon*/}
                        {/*begin::Title*/}
                        <span className="fs-7 fw-bold d-block">Card</span>
                        {/*end::Title*/}
                      </label>
                      {/*end::Radio*/}
                      {/*begin::Radio*/}
                      <label
                        className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4"
                        data-kt-button="true"
                      >
                        {/*begin::Input*/}
                        <input
                          className="btn-check"
                          type="radio"
                          name="method"
                          defaultValue={2}
                        />
                        {/*end::Input*/}
                        {/*begin::Icon*/}
                        <i className="ki-duotone ki-paypal fs-2hx mb-2 pe-0">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        {/*end::Icon*/}
                        {/*begin::Title*/}
                        <span className="fs-7 fw-bold d-block">E-Wallet</span>
                        {/*end::Title*/}
                      </label>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Radio group*/}
                    {/*begin::Actions*/}
                    <button className="btn btn-primary fs-1 w-100 py-4">
                      Print Bills
                    </button>
                    {/*end::Actions*/}
                  </div>
                  {/*end::Payment Method*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Pos order*/}
            </div>
            {/*end::Sidebar*/}
          </div>
          {/*end::Layout*/}
        </div>
        {/*end::Content container*/}
      </div>
      {/*end::Content*/}
    </div>
    {/*end::Content wrapper*/}
    
  </div>
  {/*end:::Main*/}
</>
)}


const DashboardWrapper: FC = () => {
  return (
    <>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
