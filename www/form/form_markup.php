<form class="pp-form" style="display: block;">
    <h2 class="pp-form-title">Congratulations! Only a few more steps for your loan...</h2>
    <div class="pp-form-container">
        <div class="pp-progress-bar-wrap">
            <div class="pp-progress-text">
                <span class="pp-progress-num">0%</span>
            </div>
            <div class="pp-progress-bar">
                <div class="pp-progress-bar-line" style="width: 0%;"></div>
            </div>
        </div>

        <div class="pp-item pp-step pp-first-step payday personal">
            <p class="pp-item-title">How much money are you looking for?</p>
            <div class="pp-row">
                <div class="pp-radio-buttons pp-required">
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="100" value="500" class="disabled"/>
                            <span>$100 - $500</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="500" value="1000" class="disabled"/>
                            <span>$500 - $1000</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="1000" value="2500" class="disabled"/>
                            <span>$1000 - $2500</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="2500" value="5000" class="disabled"/>
                            <span>$2500 - $5000</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="5000" value="10000" class="disabled"/>
                            <span>$5000 - $10,000</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="10000" value="15000" class="disabled"/>
                            <span>$10,000 - $15,000</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="15000" value="20000" class="disabled"/>
                            <span>$15,000 - $20,000</span>
                        </label>
                    </div>
                    <div class="pp-radio-row">
                        <label>
                            <input type="radio" name="RequestedAmount" data-min-value="25000" value="35000" class="disabled"/>
                            <span>$25,000 - $35,000</span>
                        </label>
                    </div>
                </div>
                <input type="hidden" name="MinLoanAmount" id="MinLoanAmount" value=""/>
            </div>
            <div class="pp-row pp-form-action"></div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Email</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="loading-sm--left">
                        <input type="email" name="Email" id="Email" maxlength="50" placeholder="Email" class="pp-required">
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Your Name</p>
            <p class="pp-item-description">Entering your full legal name may increase your chances of approval.</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="text" name="FirstName" id="FirstName" maxlength="50" placeholder="First Name" class="pp-required">
                </div>
            </div>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="text" name="LastName" id="LastName" maxlength="50" placeholder="Last Name" class="pp-required">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">What is this loan for?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <select name="LoanPurpose" id="LoanPurpose" class="pp-required">
                        <option value="" selected="selected">Select</option>
                        <option value="DEBTCONSOLIDATION">Debt Consolidation</option>
                        <option value="CREDITCARD">Credit Card Consolidation</option>
                        <option value="HOUSEHOLD">Furniture/Appliances/Electronics</option>
                        <option value="MAJORPURCHASE">Major Purchase</option>
                        <option value="CAR">Car Financing</option>
                        <option value="GREENLOAN">Green Loan</option>
                        <option value="BUSINESS">Business Loan</option>
                        <option value="VACATION">Vacation</option>
                        <option value="WEDDING">Wedding</option>
                        <option value="RELOCATION">Moving & Relocation</option>
                        <option value="MEDICAL">Medical Expenses</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">What is Your Date of Birth?</p>
            <p class="pp-item-description">
                We ask for your birthday so lenders can protect and verify your identity.
                You must be over 18 years of age.
            </p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="hidden" id="DOB" name="DOB" class="pp-date-mobile" mindate="-99y" maxdate="-18y">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Driver's License/State ID #</p>
            <p class="pp-item-description">Your driver's license number is used to verify your identity and prevent fraud.</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="tel" name="DriversLicense" id="DriversLicense" maxlength="25" placeholder="Drivers License" class="pp-required">
                </div>
            </div>
            <div class="pp-row">
                <div class="pp-animation">
                    <select name="DriversLicenseState" id="DriversLicenseState" class="pp-required">
                        <option value="" selected="selected">Drivers License State</option>
                        <option value="AK">AK</option>
                        <option value="AL">AL</option>
                        <option value="AR">AR</option>
                        <option value="AZ">AZ</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VA">VA</option>
                        <option value="VT">VT</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                    </select>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">What is your credit score?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <select name="Credit" id="Credit" class="pp-required">
                        <option value="">Select</option>
                        <option value="EXCELLENT">Excellent Credit (760+)</option>
                        <option value="VERYGOOD">Very Good Credit (720-759)</option>
                        <option value="GOOD">Good Credit (660-719)</option>
                        <option value="FAIR">Fair Credit (600-659)</option>
                        <option value="POOR">Poor Credit (580-599)</option>
                        <option value="VERYPOOR">Very Poor Credit (500+)</option>
                        <option value="UNSURE">Not Sure</option>
                    </select>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Primary Phone</p>
            <p class="pp-item-description">Why do we require this? Some lenders will quickly confirm your request by
                phone.</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="tel" placeholder="XXX-XXX-XXXX" name="PhoneHome" id="PhoneHome" maxlength="12" autocomplete="off" class="pp-required">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Street Address</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="text" name="Address1" maxlength="50" id="Address1" placeholder="Street Address" class="pp-required">
                </div>
            </div>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="loading-sm--left">
                        <input type="tel" name="ZipCode" id="ZipCode" placeholder="ZIP Code" class="pp-required">
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Are You a Homeowner?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="OwnHome" value="1" class="disabled"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="OwnHome" value="0" class="disabled"/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Are you currently in the Military?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="ActiveMilitary" value="0" class="disabled"/>
                                <span>No</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="ActiveMilitary" value="1" class="disabled"/>
                                <span>Yes</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Monthly Income</p>
            <p class="pp-item-description">Enter your total income before taxes and include all sources of income.</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="5000" class="disabled"/>
                                <span>Above $5000</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="4500" class="disabled"/>
                                <span>$4000 - $5000</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="3500" class="disabled"/>
                                <span>$3000 - $4000</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="2500" class="disabled"/>
                                <span>$2000 - $3000</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="1500" class="disabled"/>
                                <span>$1000 - $2000</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthlyIncome" value="1000" class="disabled"/>
                                <span>Under $1000</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">Monthly Mortgage/Rent amount</p>
            <p class="pp-item-description">Enter a value from $0 to $10,000</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="tel" class="pp-dont-send pp-required" data-pp-min="0" data-pp-max="10000" name="MortgageRentMasked" id="MortgageRentMasked" placeholder="$0 - $10,000">
                    <input type="hidden" name="MortgageRent" id="MortgageRent">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Time at Current Residence</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="72" class="disabled"/>
                                <span>5+ Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="60" class="disabled"/>
                                <span>3 to 5 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="36" class="disabled"/>
                                <span>2 to 3 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="24" class="disabled"/>
                                <span>1 to 2 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="12" class="disabled"/>
                                <span>7 to 12 Months</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtAddress" value="6" class="disabled"/>
                                <span>1 to 6 Months</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">Residence Type</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="ResidenceType" value="OWN" class="disabled"/>
                                <span>Own</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="ResidenceType" value="RENT" class="disabled"/>
                                <span>Rent</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="ResidenceType" value="OTHER" class="disabled"/>
                                <span>Other</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">What is the highest level of education</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="HIGHSCHOOL" class="disabled"/>
                                <span>High School</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="ASSOCIATE" class="disabled"/>
                                <span>Associate</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="BACHELOR" class="disabled"/>
                                <span>Bachelor</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="OTHERPROFESSIONALDEGREE" class="disabled"/>
                                <span>Other Professional Degree</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="MASTER" class="disabled"/>
                                <span>Master</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="Education" value="DOCTORALDEGREE" class="disabled"/>
                                <span>Doctoral Degree</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">
                Annual Pre-Tax Income
                <span class="custom-helper">?
                    <span class="custom-helper-msg">You are not required to disclose income that is alimony, child support, or separate maintenance income unless you want to use that income to qualify for a loan.</span>
                </span>
            </p>
            <p class="pp-item-description">Enter a value from $1,000 to $1,000,000</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="text" name="AnnualIncomeMasked" class="pp-dont-send pp-required" data-pp-min="1000" data-pp-max="1000000" id="AnnualIncomeMasked" placeholder="$1,000 - $1,000,000">
                    <input type="hidden" name="AnnualIncome" id="AnnualIncome">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">Employment Status</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="FULLTIME" class="disabled"/>
                                <span>Full-Time</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="PARTTIME" class="disabled"/>
                                <span>Part-Time</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="SELFEMPLOYED" class="disabled"/>
                                <span>Self-Employed</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="OTHER" class="disabled"/>
                                <span>Other</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Employment Status</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="Employment" class="disabled"/>
                                <span>Employment</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="IncomeType" value="Benefits" class="disabled"/>
                                <span>Benefits</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Time Employed</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="72" class="disabled"/>
                                <span>5+ Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="60" class="disabled"/>
                                <span>3 to 5 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="36" class="disabled"/>
                                <span>2 to 3 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="24" class="disabled"/>
                                <span>1 to 2 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="12" class="disabled"/>
                                <span>7 to 12 Months</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsEmployed" value="6" class="disabled"/>
                                <span>1 to 6 Months</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Employer</p>
            <div class="pp-row">
                <input type="text" name="EmployerName" maxlength="25" id="EmployerName" placeholder="Company Name" class="pp-required">
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step personal">
            <p class="pp-item-title">Employer Address</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="text" name="EmployerAddress" maxlength="25" id="EmployerAddress" placeholder="Employer Street Address" class="pp-required">
                </div>
            </div>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="loading-sm--left">
                      <input type="tel" name="EmployerZip"  id="EmployerZip" placeholder="ZIP Code" class="pp-required"></div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Employer Phone</p>
            <p class="pp-item-description">Improve your chances of approval with a valid work phone number. We will not
                contact your employer.</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="tel" name="PhoneWork" maxlength="12" id="PhoneWork" placeholder="XXX-XXX-XXXX" autocomplete="off" class="pp-required">
                </div>
            </div>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="tel" name="PhoneWorkExt" maxlength="5" id="PhoneWorkExt" placeholder="Ext.">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">How Often Are You Paid?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="PayFrequency" value="WEEKLY" class="disabled"/>
                                <span>Weekly</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="PayFrequency" value="BIWEEKLY" class="disabled"/>
                                <span>Every 2 weeks</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="PayFrequency" value="MONTHLY" class="disabled"/>
                                <span>Monthly</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">Next Paydate</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <select name="PayDate1" id="PayDate1" class="pp-required">
                        <option selected="selected" value="">Next Paydate</option>
                    </select>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Deposit Details</p>
            <p class="pp-item-description">This information is needed so a lender can direct deposit your loan when approved.</p>
            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="tel" name="BankABA" maxlength="9" id="BankABA" placeholder="ABA/Routing" class="pp-required">
                    <div class="pp-check">
                        <span class="pp-aba-lookup" id="pp-aba-lookup">Need help? Use our ABA lookup</span>
                        <p class="pp-check-description">
                            Your data is secured using industry standard for the site information security. Your
                            ABA/Routing number can be found on most bank statements as well as on the bottom of your checks.
                        </p>
                        <div class="pp-check-img"></div>
                    </div>
                </div>
            </div>

            <div class="pp-row pp-row--mgbtm">
                <div class="pp-animation">
                    <input type="text" name="BankName" maxlength="100" id="BankName" placeholder="Bank Name" class="pp-required">
                </div>
            </div>

            <div class="pp-row">
                <div class="pp-animation">
                    <input type="tel" name="BankAccountNumber" maxlength="30" id="BankAccountNumber" placeholder="Account Number" class="pp-required">
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-continue-btn" tabindex="0">Continue</button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Type of Bank Account</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="BankAccountType" value="CHECKING" class="disabled"/>
                                <span>Checking</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="BankAccountType" value="SAVINGS" class="disabled"/>
                                <span>Savings</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday">
            <p class="pp-item-title">Time with Bank Account</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="72" class="disabled"/>
                                <span>5+ Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="60" class="disabled"/>
                                <span>3 to 5 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="36" class="disabled"/>
                                <span>2 to 3 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="24" class="disabled"/>
                                <span>1 to 2 Years</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="12" class="disabled"/>
                                <span>7 to 12 Months</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="MonthsAtBank" value="6" class="disabled"/>
                                <span>1 to 6 Months</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step payday personal">
            <p class="pp-item-title">How is your Paycheck Received?</p>
            <div class="pp-row">
                <div class="pp-animation">
                    <div class="pp-radio-buttons pp-required">
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="DirectDeposit" value="1" class="disabled"/>
                                <span>Electronic Deposit</span>
                            </label>
                        </div>
                        <div class="pp-radio-row">
                            <label>
                                <input type="radio" name="DirectDeposit" value="0" class="disabled"/>
                                <span>Paper Check</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
            </div>
        </div>

        <div class="pp-item pp-step pp-last-step payday personal" > <!--style="display: block;"-->
            <p class="pp-item-title">Social Security Number</p>
            <p class="pp-item-description">
                Many lenders need your Social Security Number to approve your loan. This site
                is safe and secured by SSL encryption. An industry standard for site and information security.
            </p>
            <div class="pp-row">
                <div class="pp-animation">
                    <input type="tel" name="SSN1" maxlength="11" id="SSN1" class="pp-dont-select pp-required" placeholder="XXX-XX-XXXX" autocomplete="off">
                    <input type="hidden" id="SSN" name="SSN">
                </div>
            </div>
            <div class="pp-disclaimer">
                By clicking “View Offer!”, I affirm that I have read, understand, and agree to the Credit Authorization Agreement and Disclosure, Privacy Policy and Terms of Use, my click is my electronic signature, and I authorize you to share my information with lenders, lending partners, and other marketing partners that might use autodialers or prerecorded messages to call or text me on my mobile phone or landline or contact me via email. I understand consent is not required to obtain a loan. I further understand that I have no obligation to accept a loan once I am connected with an available lender or lending partner.
            </div>
            <div class="pp-row pp-form-action">
                <div class="pp-btn-container pp-back">
                    <button type="button" class="pp-action-btn pp-back-btn" tabindex="1"></button>
                </div>
                <div class="pp-btn-container pp-confirmation">
                    <button type="button" class="pp-action-btn pp-submit-btn" tabindex="0">View Offer!</button>
                </div>
            </div>
        </div>
    </div>
</form>

<form class="pp-form-returning">
    <div class="pp-form-container">
        <div class="pp-returning-step returning-confirmation">
            <div class="pp-returning-title">
                <p class="pp-title-item">Welcome Back!</p>
                <p>Please confirm your information</p>
                <div class="pp-secure-logo"></div>
            </div>
            <div class="pp-row">
                <div class="pp-col pp-col-2">
                    <label for="ZipCode">Zip Code</label>
                    <input type="tel" name="ZipCode" maxlength="5" class="pp-required pp-returning-zip" placeholder="xxxxx">
                </div>
                <div class="pp-col pp-col-2 pp-ssn">
                    <label for="SSN">Social Security Number</label>
                    <span>XXX - XX - </span>
                    <div class="pp-ssn-wrap">
                        <input type="tel" placeholder="xxxx" name="SSN" maxlength="4" class="pp-required pp-returning-ssn" autocomplete="off">
                    </div>
                </div>
            </div>
            <div class="pp-row">
                <p>You can select loan amount and update your information on next page</p>
                <button type="button" class="pp-action-btn pp-verify-btn">Verify</button>
                <p class="pp-separator">or</p>
                <button type="button" class="pp-action-btn pp-submit-new-btn">SUBMIT NEW REQUEST</button>
            </div>
        </div>

        <div class="pp-returning-step returning-submit">
            <div class="pp-returning-title">
                <p class="pp-title-item">Congratulations,</p>
                <p class="pp-returning-name">First Name!</p>
                <div class="pp-secure-logo"></div>
            </div>
            <div class="pp-row pp-btm-line pdb-20">
                <p class="pp-submit">We found your previous <br> request submitted on <br>
                    <span class="pp-returning-date">05/19/2017</span>
                </p>
            </div>
            <div class="pp-row">
                <div class="pp-col pp-col-2">
                    <label for="RequestedAmount">Loan Amount</label>
                    <select name="RequestedAmount" id="RequestedAmount" class="pp-required">
                        <option value="" selected="selected">Select</option>
                        <option value="500" data-min-value="100">$100 - $500</option>
                        <option value="1000" data-min-value="500">$500 - $1000</option>
                        <option value="2500" data-min-value="1000">$1000 - $2500</option>
                        <option value="5000" data-min-value="2500">$2500 - $5000</option>
                    </select>
                </div>
                <div class="pp-col pp-col-2">
                    <label for="MonthlyIncome">Gross Monthly Income</label>
                    <select name="MonthlyIncome" id="MonthlyIncome" class="pp-required">
                        <option value="" selected="selected">Select</option>
                        <option value="5000">Above $5000</option>
                        <option value="4500">$4000 - $5000</option>
                        <option value="3500">$3000 - $4000</option>
                        <option value="2500">$2000 - $3000</option>
                        <option value="1500">$1000 - $2000</option>
                        <option value="1000">Under $1000</option>
                    </select>
                </div>
            </div>
            <div class="pp-row pp-btm-line pdb-helper">
                    <div class="pp-col pp-col-2">
                        <label for="PayFrequency">How Often Are You Paid?</label>
                        <select name="PayFrequency" id="PayFrequency" class="pp-required">
                            <option value="" selected="selected">Select</option>
                            <option value="BIWEEKLY">Every 2 weeks</option>
                            <option value="TWICEMONTHLY">Twice a Month</option>
                            <option value="MONTHLY">Monthly</option>
                            <option value="WEEKLY">Weekly</option>
                        </select>
                    </div>
                    <div class="pp-col pp-col-2">
                        <label for="PayDate1">Next Paydate</label>
                        <select name="PayDate1" class="pp-returning-pay-date pp-required">
                            <option value="">Next Paydate</option>
                        </select>
                    </div>
                </div>
            <div class="pp-row">
                <div class="pp-returning-btn-container">
                    <button type="button" class="pp-action-btn pp-submit-returning-btn">SUBMIT</button>
                </div>
            </div>
            <div class="pp-row">
                <p>
                    If your bank account, home address, or <br> employer changed since your last
                    request <br> please <a class="pp-update-btn">update information</a>
                </p>
            </div>

            <input type="hidden" name="MinLoanAmount" id="returningMinLoanAmount" value="">
        </div>
    </div>
</form>

<div class="pp-processing">
    <div class="pp-form-container">
        <p class="pp-processing-title">
            Please wait while we process your request with our panel of authorized lending partners.
        </p>
        <p class="pp-processing-title">
            Check your email for loan confirmation or available storefront
            lenders and other exclusive offers.
        </p>
        <p class="pp-processing-warning">Do not close this window while the form is processing.</p>
        <p class="pp-processing-action">Form processing</p>
        <div class="pp-processing-bar" id="pp-processing-bar"></div>
        <p class="pp-processing-text">
            If you are connected with one of our authorized lending partners,
            you will be redirected to an electronic signature page to review the loan terms.
        </p>
        <p class="pp-processing-text">In some cases, you may be directed to a local storefront location for your loan.</p>
    </div>
</div>
