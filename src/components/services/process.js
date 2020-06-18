import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import ourProcessStyles from './process.module.scss'
import IconDesignProcess from "../../images/svg/icon-design-process.inline.svg"

const DesignProcess = () => {

    return (
        <section className={ourProcessStyles.ourProcess + ' section-layout-wide'} id="designProcess">
            <div className={ourProcessStyles.ourProcessWrapper}>

                <ul>
                    <li>
                        <IconDesignProcess />
                        <h3>Our design process</h3>
                        <p>Good design includes a design process that aligns with an overarching strategy. The following process has been created for website design and can be adapted for graphic design.</p>
                        <p>Our process is a guide that builds a carefully planned project with task allocation and attention to detail allowing for change requests, testing and contingency.</p>

                        <ol>
                            <li>
                                <h4>Goal identification</h4>
                                <p>We work with you to determine what are the goals that need to fulfil. I.e., what is the purpose of the project?</p>
                            </li>
                            <li>
                                <h4>Discovery, scope &amp; definition</h4>
                                <p>Knowing what the goals are, we can define the scope of the project. I.e., what elements and features are required to fulfil the goal, and the time-line for building those out.</p>
                            </li>
                            <li>
                                <h4>Site-map &amp; wire-frame creation</h4>
                                <p>Knowing the scope and definition, a map can created defining how content and features will interrelate.</p>
                            </li>
                            <li>
                                <h4>Content creation</h4>
                                <p>Having bigger picture in mind, it's mostly essential to have real content to work with.</p>
                            </li>
                            <li>
                                <h4>Visual elements</h4>
                                <p>With the architecture and some content in place, we can start working on the visual elements. Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles, mood-boards, and element collages can help with this process.</p>
                            </li>
                            <li>
                                <h4>Testing</h4>
                                <p>By now, you've got all your pages and defined how they display to the site visitor, so it's time to make sure it all works. Combine manual browsing of the site on a variety of devices with automated site crawlers to identify everything from user experience issues to simple broken links.</p>
                            </li>
                            <li>
                                <h4>Launch</h4>
                                <p>Once everything's working beautifully, it's time to plan and execute your site launch! This should include planning both launch timing and communication strategies — i.e., when will you launch and how will you let the world know?</p>
                            </li>
                        </ol>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default DesignProcess

