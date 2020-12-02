<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SkillshopMailer extends Mailable
{
    use Queueable, SerializesModels;

    public $sysid;
    public $productName;
    public $overview;
    public $selectedCourses;
    public $pricePoints;
    public $sme;
    public $bio;
    public $imgLink;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->sysid = $request['sysid'];
        $this->productName = $request['productName'];
        $this->overview = $request['overview'];
        $this->selectedCourses = json_encode($request['selectedCourses']);
        $this->pricePoints = $request['pricePoints'];
        $this->sme = $request['sme'];
        $this->bio = $request['bio'];
        $this->imgLink = $request['imgLink'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->from('support@lightspeedvt.com')
                    ->markdown('skillshop.emails.index');
    }
}
